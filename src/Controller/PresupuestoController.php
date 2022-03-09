<?php

namespace App\Controller;

use App\Entity\ActualHistorico;
use App\Entity\Control;
use Exception;
use Pagerfanta\Pagerfanta;
use App\Entity\Presupuesto;
use App\Form\ControlActualFormType;
use Psr\Log\LoggerInterface;
use App\Form\PresupuestoFormType;
use App\Repository\ActualRepository;
use App\Repository\ControlRepository;
use App\Repository\ObraRepository;
use App\Repository\PartidaRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PresupuestoRepository;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use PhpParser\Node\Stmt\TryCatch;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class PresupuestoController extends AbstractController
{
    #[Route('/admin/cierre', name:'admin_cierre_mes')]
    public function cierreMes(ObraRepository $obraRepository)
    {
        $obras= $obraRepository->getAllActive();

        return $this->render('admin/cierreMes.html.twig', [
            'obras' => $obras,
        ]);
    }

    #[Route('/admin/cierre/{obraid?}/{fecha?}', name:'admin_ejecuta_cierre')]
    public function ejecutaCierreMes($obraid, $fecha, ObraRepository $obraRepository, ControlRepository $controlRepository, PresupuestoRepository $presupuestoRepository, EntityManagerInterface $em, ActualRepository $actualRepository){
        $success = array();
        $success['success'] = false;
        $obra = $obraRepository->findOneBy(['id' => $obraid]);

        $controls = $controlRepository->getByObraAndFecha($obra, $fecha);

        if ($controls){
            return new Response(null, 203);
        }

        $presupuestos = $presupuestoRepository->findBy(['obra'=>$obra]);
        $actuals = $actualRepository->findBy(['obra' => $obra]);

        $date = new \DateTime('@'.strtotime($fecha));

        $em->beginTransaction();

        try{
            foreach($presupuestos as $presupuesto){
                $control = new Control();
                $control->setObra($presupuesto->getObra());
                $control->setFecha($date);
                $control->setPartida($presupuesto->getPartida());
                $control->setCantini($presupuesto->getCantini());
                $control->setCostoini($presupuesto->getCostoini());
                $control->setTotalini($presupuesto->getTotalini());
                $control->setRendidocant($presupuesto->getRendidocant());
                $control->setRendidotot($presupuesto->getRendidotot());
                $control->setPorgascan($presupuesto->getPorgascan());
                $control->setPorgascost($presupuesto->getPorgascost());
                $control->setPorgastot($presupuesto->getPorgastot());
                $control->setPresactu($presupuesto->getPresactu());
                $em->persist($control);
                $em->flush();
            }

            foreach($actuals as $actual){
                $historico = new ActualHistorico();
                $historico->setObra($actual->getObra());
                $historico->setFecha($date);
                $historico->setPartida($actual->getPartida());
                $historico->setCasas($actual->getCasas());
                $historico->setTotal($actual->getTotal());
                $em->persist($historico);
                $em->flush();
            }

            $em->commit();
        } catch (Exception $e){
            $em->rollback();
            return new Response(null, 500);
        }

        return new Response(null, 200);
    }

    #[Route('/presupuesto', name: 'presupuesto_show')]
    public function index(PresupuestoRepository $presupuestoRepository, Request $request): Response
    {
        $presupuestos = $presupuestoRepository->getAllOrdered();

        $pagerfanta = new Pagerfanta(new QueryAdapter($presupuestos));
        $pagerfanta->setMaxPerPage(20);
        $pagerfanta->setCurrentPage($request->query->get('page', 1));

        // return $this->render('presupuesto/index.html.twig', [
        //     'pager' => $pagerfanta,
        // ]);

        return $this->render('presupuesto/index.html.twig', [
            'pager' => $pagerfanta,
        ]);
    }

    #[Route('/control/actual', name: 'control_actual')]
    public function controlActual(PresupuestoRepository $presupuestoRepository, Request $request): Response
    {
        $form = $this->createForm(ControlActualFormType::class);

        $form->handleRequest($request);
        $presupuestos = $presupuestoRepository;
        // dd ($presupuestos);
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $presupuestos = $presupuestoRepository->getAllOrderedObra($data->getObra()->getId());
        }
        return $this->render('control/actual.html.twig', [
            'presupuestos' => $presupuestos,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/presupuesto/add', name: 'presupuesto_add')]
    public function add(Request $request, PartidaRepository $partidaRepository, LoggerInterface $logger, EntityManagerInterface $em, PresupuestoRepository $presupuestoRepository): Response
    {
        $form = $this->createForm(PresupuestoFormType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $em->beginTransaction();
            try{
                $data = $form->getData();
                $cant = $data->getPorgascan();
                $uni = $data->getPorgascost();
                $total = $cant * $uni;
                $data->setCantini($cant);
                $data->setCostoini($uni);
                $data->setTotalini($total);
                $data->setRendidocant(0);
                $data->setRendidotot(0);
                $data->setPorgastot($total);
                $data->setPresactu($total);
                $em->persist($data);
                $em->flush();
                $obra = $data->getObra();
                $partidainicial = $data->getPartida();

                $partida = $partidaRepository->findOneBy(['codigo' => $data->getPartida()->getCodigo()]);
                $padre = $partida->getPadre();
                while ($padre){
                    $partida = $partidaRepository->findOneBy(['id' => $padre]);
                    $data = $presupuestoRepository->findOneBy([
                        'obra' =>$data->getObra(),
                        'partida' => $padre
                    ]);
                    if ($data){
                        $data->setTotalini($data->getTotalini()+$total);
                        $data->setPorgastot($data->getPorgastot() + $total);
                        $data->setPresactu($data->getRendidotot()+$data->getPorgastot());
                        $em->flush();
                    } else {
                        $data = new Presupuesto();
                        $data->setObra($obra);
                        $data->setPartida($partida);
                        $data->setTotalini($total);
                        $data->setRendidotot(0);
                        $data->setPorgastot($total);
                        $data->setPresactu($total);
                        $em->persist($data);
                        $em->flush();
                    }
                    $padre = $partida->getPadre();
                }

                $string = 'Partida presupuestaria '. $partidainicial->getNombre() .' en la obra ' . $obra->getNombre() . ' creada satisfactoriamente';
                $this->addFlash('success', $string);
                $em->commit();
                return $this->redirectToRoute('presupuesto_show');
            } catch (Exception $e) {
                $em->rollback();
                throw $e;
                
            }
        }
        return $this->render('presupuesto/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/presupuesto/edit/{obraid}/{partidaid}', name: 'presupuesto_edit')]
    public function edit($obraid, $partidaid, Request $request, PartidaRepository $partidaRepository, LoggerInterface $logger, EntityManagerInterface $em, PresupuestoRepository $presupuestoRepository ): Response
    {
        $presupuesto = $presupuestoRepository->findOneBy([
            'obra' => $obraid,
            'partida' => $partidaid,
        ]);
        dump($presupuesto);
        $form = $this->createForm(PresupuestoFormType::class, $presupuesto);
        dump($presupuesto, $form);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $inicial = $presupuesto->getPorgastot();
            $data = $form->getData();
            $data->setPorgastot($data->getPorgascan()*$data->getPorgascost());
            $data->setPresactu($data->getRendidotot()+$data->getPorgastot());
            if ($presupuestoRepository->actualizaPresupuesto($presupuesto->getPartida(), $presupuesto->getObra(), $inicial, $data)){
                $string= 'Partida presupuestaria '. $presupuesto->getPartida()->getNombre() .' en la obra ' . $presupuesto->getObra()->getNombre() . ' actualizada satisfactoriamente';
                $this->addFlash('success', $string);
            } else {
                $string= 'Partida presupuestaria '. $presupuesto->getPartida()->getNombre() .' en la obra ' . $presupuesto->getObra()->getNombre() . ' no pudo ser grabada';
                $this->addFlash('error', $string);
            }
            return $this->redirectToRoute('presupuesto_show');
        }
        return $this->render('presupuesto/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\Presupuesto;
use App\Form\PresupuestoFormType;
use App\Repository\PartidaRepository;
use App\Repository\PresupuestoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PresupuestoController extends AbstractController
{
    #[Route('/presupuesto', name: 'presupuesto_show')]
    public function index(PresupuestoRepository $presupuestoRepository): Response
    {
        return $this->render('presupuesto/index.html.twig', [
            'presupuestos' => $presupuestoRepository->getAllOrdered(),
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
                    dump($partida, $data);
                }

                $string = 'Partida presupuestaria '. $partidainicial->getNombre() .' en la obra ' . $obra->getNombre() . ' creada satisfactoriamente';
                $this->addFlash('success', $string);
                $em->commit();
                return $this->redirectToRoute('presupuesto_show');
                dump($data, $em);
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
        $form = $this->createForm(PresupuestoFormType::class, $presupuesto);
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

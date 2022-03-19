<?php

namespace App\Controller;

use App\Entity\Actual;
use Pagerfanta\Pagerfanta;
use App\Form\ActualFormType;
use Doctrine\DBAL\Exception;
use App\Repository\ActualRepository;
use App\Repository\PartidaRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PresupuestoRepository;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ActualController extends AbstractController
{

    #[Route('/actual', name: 'actual')]
    public function index(ActualRepository $actualRepository, Request $request): Response
    {
        $actual = $actualRepository->getAllOrdered();

        $pagerfanta = new Pagerfanta(new QueryAdapter($actual));
        $pagerfanta->setMaxPerPage(10);
        $pagerfanta->setCurrentPage($request->query->get('page', 1));
        return $this->render('actual/index.html.twig', [
            'pager' => $pagerfanta,
        ]);

        return $this->render('actual/index.html.twig',[
            'pager' => $pagerfanta,
        ]);
    }

    #[Route('/actual/add', name: 'actual_add')]
    public function add(Request $request, EntityManagerInterface $em, PresupuestoRepository $presupuestoRepository, PartidaRepository $partidaRepository, ActualRepository $actualRepository): Response
    {
        $form = $this->createForm(ActualFormType::class);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $casas = $data->getObra()->getCasas();
            $obra = $data->getObra();
            $partida = $partidaRepository->findOneBy(['id'=> $data->getPartida()->getId()]);
            $presupuesto = $presupuestoRepository->findOneBy(['obra'=>$obra, 'partida'=>$partida]);
            $total = $data->getCasas()*$presupuesto->getPresactu()/$casas;
            $data->setTotal($total);
            $em->beginTransaction();
            try{
                $em->persist($data);
                $em->flush();
                $padre = $partida->getPadre();
                while ($padre){
                        $partida = $partidaRepository->findOneBy(['id' => $padre]);
                        $data1 = $actualRepository->findOneBy([
                                'obra' =>$obra,
                                'partida' => $padre
                            ]);
                        if ($data1){
                            $data1->setTotal($data1->getTotal()+$total);
                            $em->flush();
                        } else {
                            $data1 = new Actual();
                            $data1->setObra($obra);
                            $data1->setPartida($partida);
                            $data1->setTotal($total);
                            $em->persist($data1);
                            $em->flush();
                        }
                        $padre = $partida->getPadre();
                }
                $em->commit();
            }
            catch (Exception $e) {
                $em->rollback();
                return $this->render('actual/form.html.twig', [
                    'form' => $form->createView(),
                ]);
            }
            $this->addFlash('success', 'Avance de obra creado satisfactoriamente');
            return $this->redirectToRoute('actual');
        }

        return $this->render('actual/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/actual/edit/{obraid}/{partidaid}', name: 'actual_edit')]
    public function edit($obraid, $partidaid, Request $request, EntityManagerInterface $em, ActualRepository $actualRepository, PresupuestoRepository $presupuestoRepository): Response
    {
        $actual = $actualRepository->findOneBy(['obra'=> $obraid, 'partida' => $partidaid]);
        $form = $this->createForm(ActualFormType::class, $actual);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $obra = $data->getObra();
            $presupuesto  = $presupuestoRepository->findOneBy([
                'obra' => $obra,
                'partida' => $data->getPartida(),
            ]);
            $totalPorCasa = $presupuesto->getPresactu() / $presupuesto->getObra()->getCasas();
            $totalActual = $data->getCasas() * $totalPorCasa;
            $totalActualAntiguo =  $data->getTotal();
            $diferenciaEnTotal = $totalActual - $totalActualAntiguo;
            $em->beginTransaction();
            dump($data);
            try{
                $data->setTotal($totalActual);
                $em->persist($data);
                $em->flush();
                if ($diferenciaEnTotal != 0){
                    $partidaPadre = $data->getPartida()->getPadre();
                    while ($partidaPadre){
                        $nuevoActual = $actualRepository->findOneBy([
                            'obra' => $obra,
                            'partida' => $partidaPadre,
                        ]);
                        $nuevoActual->setTotal($nuevoActual->getTotal()+$diferenciaEnTotal);
                        $em->persist($nuevoActual);
                        $em->flush();
                        dump($nuevoActual);
                        $partidaPadre = $nuevoActual->getPartida()->getPadre();
                    }
                }
                $em->commit();
                $this->addFlash('success', 'Avance de obra actualizado exitosamente');
            } catch (\Exception $e){
                $em->rollback();
                return new Response($e, 500);
            }
            return $this->redirectToRoute('actual');
        }

        return $this->render('actual/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

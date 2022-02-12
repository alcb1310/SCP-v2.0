<?php

namespace App\Controller;

use App\Entity\Partida;
use App\Form\PartidaFormType;
use App\Repository\PartidaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PartidaController extends AbstractController
{
    #[Route('/partida', name: 'partida_show')]
    public function index(PartidaRepository $partidaRepository): Response
    {
        $partida=$partidaRepository->getAllOrderedByCodigo();
        return $this->render('partida/index.html.twig', [
            'partidas' => $partida,
        ]);
    }

    #[Route('/partida/add', name: 'partida_add')]
    public function add(Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(PartidaFormType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Partida creada satisfactoriamente');
            return $this->redirectToRoute('partida_show');
        }
        return $this->render('partida/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/partida/edit/{id}', name: 'partida_edit')]
    public function edit($id, Request $request, EntityManagerInterface $em, PartidaRepository $partidaRepository): Response
    {
        $partida = $partidaRepository->findOneBy(['id' => $id]);
        $form = $this->createForm(PartidaFormType::class, $partida);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Partida creada satisfactoriamente');
            return $this->redirectToRoute('partida_show');
        }
        return $this->render('partida/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

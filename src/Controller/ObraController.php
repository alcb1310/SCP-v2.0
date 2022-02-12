<?php

namespace App\Controller;

use App\Form\ObraFormType;
use App\Repository\ObraRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ObraController extends AbstractController
{
    #[Route('/obra', name: 'obra_show')]
    public function index(ObraRepository $obraRepository): Response
    {
        return $this->render('obra/index.html.twig', [
            'obras' => $obraRepository->findAll(),
        ]);
    }

    #[Route('/obra/add', name: 'obra_add')]
    public function add(ObraRepository $obraRepository, EntityManagerInterface $em, Request $request): Response
    {
        $form = $this->createForm(ObraFormType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Obra creada satisfactoriamente');
            return $this->redirectToRoute('obra_show');
        }
        return $this->render('obra/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
    #[Route('/obra/edit/{id}', name: 'obra_edit')]
    public function edit($id, ObraRepository $obraRepository, EntityManagerInterface $em, Request $request): Response
    {
        $obra = $obraRepository->findOneBy(['id' => $id]);
        dump($obra);
        $form = $this->createForm(ObraFormType::class, $obra);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Obra creada satisfactoriamente');
            return $this->redirectToRoute('obra_show');
        }
        return $this->render('obra/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

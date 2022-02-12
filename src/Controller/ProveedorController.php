<?php

namespace App\Controller;

use App\Form\ProveedorFormType;
use App\Repository\ProveedorRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProveedorController extends AbstractController
{
    #[Route('/proveedor', name: 'proveedor_show')]
    public function index(ProveedorRepository $proveedorRepository): Response
    {
        $proveedor = $proveedorRepository->getAllOrdered();
        return $this->render('proveedor/index.html.twig', [
            'proveedores' => $proveedor,
        ]);
    }

    #[Route('/proveedor/add', name: 'proveedor_add')]
    public function add(Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(ProveedorFormType::class);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Proveedor grabado satisfactoriamente');
            return $this->redirectToRoute('proveedor_show');
        }
        return $this->render('proveedor/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/proveedor/edit/{id}', name: 'proveedor_edit')]
    public function edit($id, Request $request, EntityManagerInterface $em, ProveedorRepository $proveedorRepository): Response
    {
        $proveedor=$proveedorRepository->findOneBy(['id'=>$id]);
        $form = $this->createForm(ProveedorFormType::class, $proveedor);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->flush();
            $this->addFlash('success', 'Proveedor grabado satisfactoriamente');
            return $this->redirectToRoute('proveedor_show');
        }
        return $this->render('proveedor/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

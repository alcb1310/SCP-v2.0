<?php

namespace App\Controller;

use App\Form\CuadreFormType;
use App\Form\FacturaFormType;
use App\Repository\FacturaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FacturaController extends AbstractController
{

    #[Route('/factura', name: 'factura_show')]
    public function index(FacturaRepository $facturaRepository): Response
    {
        $facturas=$facturaRepository->getAllOrdered();
        return $this->render('factura/index.html.twig', [
            'facturas' => $facturas,
        ]);
    }
    
    #[Route('/factura/add', name: 'factura_add')]
    public function add(Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(FacturaFormType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $data->setTotal(0);
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Factura creada exitosamente');
            return $this->redirectToRoute('detalle_add', [
                'factura' => $data->getId(),
            ]);
        }
        return $this->render('factura/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/factura/edit/{id}', name: 'factura_edit')]
    public function edit($id, Request $request, EntityManagerInterface $em, FacturaRepository $facturaRepository): Response
    {
        $factura = $facturaRepository->findOneBy(['id'=>$id]);
        $form = $this->createForm(FacturaFormType::class, $factura);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Factura actualizada exitosamente');
            return $this->redirectToRoute('detalle_add', [
                'factura' => $data->getId(),
            ]);
        }
        return $this->render('factura/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/cuadre', name: 'cuadre')]
    public function cuadre(Request $request, EntityManagerInterface $em, FacturaRepository $facturaRepository): Response
    {
            $form = $this->createForm(CuadreFormType::class);
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) { 
                $data = $form->getData();
                $facturas = $facturaRepository->getAllInMonth($data->getObra(), $data->getFecha());
                $total=0;
                foreach ($facturas as $factura){
                    $total = $total + $factura->getTotal();
                }
                
                return $this->render('cuadre/index.html.twig', [
                    'form' => $form->createView(),
                    'facturas' => $facturas,
                    'total' => $total,
                ]);
            }
            return $this->render('cuadre/index.html.twig', [
                'form' => $form->createView(),
            ]);
        
    }

}

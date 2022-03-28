<?php

namespace App\Controller;

use DateTime;
use App\Form\FacturaFormType;
use App\Repository\ObraRepository;
use App\Repository\FacturaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
            'edit' => 1,
            'factura' => $id
        ]);
    }

    #[Route('/reportes/cuadre', methods:"GET")]
    public function getCuadreData(Request $request, ObraRepository $obraRepository, FacturaRepository $facturaRepository)
    {
        $obra = $obraRepository->findOneBy(['id' => $request->query->get('obra')] );
        $fecha = new DateTime($request->query->get('fecha'));
        $facturas = $facturaRepository->getAllInMonth($obra, $fecha);

        $reporte = [];
        foreach($facturas as $factura){
            $data = [
                'proveedor' => $factura->getProveedor()->getNombre(),
                'numero' => $factura->getNumero(),
                'fecha' => $factura->getFecha(),
                'total' => $factura->getTotal()
            ];
            $reporte[] = $data;
        }

        return new JsonResponse($reporte);
    }

    #[Route('/cuadre', name: 'cuadre')]
    public function cuadre(): Response
    {
            return $this->render('cuadre/index.html.twig');
    }

}

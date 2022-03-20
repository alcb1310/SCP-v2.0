<?php

namespace App\Controller;

use App\Entity\DetalleFactura;
use App\Form\DetalleFacturaFormType;
use App\Repository\DetalleFacturaRepository;
use App\Repository\FacturaRepository;
use App\Repository\PresupuestoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DetalleFacturaController extends AbstractController
{
    #[Route('/detalle/factura/{factura}', name: 'detalle_add')]
    public function index($factura, DetalleFacturaRepository $detalleFacturaRepository, Request $request, FacturaRepository $facturaRepository, PresupuestoRepository $presupuestoRepository): Response
    {

        $factura = $facturaRepository->findOneBy(['id' => $factura]);
        $detalle = new DetalleFactura();
        $detalle->setFactura($factura);
        
        $detalle->setObranombre($factura->getObra()->getNombre());
        $detalle->setProveedornombre($detalle->getFactura()->getProveedor()->getNombre());
        $detalle->setFacturanum($detalle->getFactura()->getNumero());

        $form = $this->createForm(DetalleFacturaFormType::class, $detalle);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $data->setTotal($data->getCantidad()*$data->getUnitario());
            if ($presupuestoRepository->grabaFactura($data, $data->getPartida(),$data->getFactura()->getObra(), $data->getTotal(), $data->getCantidad(), $data->getUnitario())){
                $this->addFlash('success', 'Detalle factura grabado exitosamente');
            } else {
                $this->addFlash('error', 'No se pudo grabar el detalle');
            }
        }
        $detalles = $detalleFacturaRepository->findBy([
            'factura' => $factura,
        ]);

        return $this->render('detalle_factura/index.html.twig', [
            'form' => $form->createView(),
            'detalles' =>$detalles,
        ]);
    }

    #[Route('/gasto/mes', name:'gasto_mes')]
    public function gastoMes():Response
    {
        return $this->render('cuadre/gastomes.html.twig');
    }

    #[Route('/detalle/factura/delete/{factura}/{partida}', name: 'detalle_delete')]
    public function delete($factura, $partida, DetalleFacturaRepository $detalleFacturaRepository, PresupuestoRepository $presupuestoRepository): Response
    {
        $detalle = $detalleFacturaRepository ->findOneBy([
            'factura' => $factura,
            'partida' => $partida
        ]);

        if ($presupuestoRepository->borraDetalleFactura($detalle)){
            $this->addFlash('success', 'Detalle borrado exitosamente');
            return $this->redirectToRoute('detalle_add', [
                'factura' => $factura,
            ]);
        } else {
            $this->addFlash('error', 'No se pudo borrar el detalle');
            return $this->redirectToRoute('detalle_add', [
                'factura' => $factura,
            ]);
        }
        return  new Response('borrando');
    }
}

<?php

namespace App\Controller;

use App\Entity\DetalleFactura;
use App\Entity\Partida;
use App\Form\DetalleFacturaFormType;
use App\Form\GastoMesFormType;
use App\Repository\DetalleFacturaRepository;
use App\Repository\FacturaRepository;
use App\Repository\PartidaRepository;
use App\Repository\PresupuestoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DetalleFacturaController extends AbstractController
{
    #[Route('/detalle/factura/{factura}', name: 'detalle_add')]
    public function index($factura, DetalleFacturaRepository $detalleFacturaRepository, Request $request, FacturaRepository $facturaRepository, PresupuestoRepository $presupuestoRepository): Response
    {
        $detalles = $detalleFacturaRepository->findBy([
            'factura' => $factura,
        ]);

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

        return $this->render('detalle_factura/index.html.twig', [
            'form' => $form->createView(),
            'detalles' =>$detalles,
        ]);
    }

    #[Route('/gasto/mes', name:'gasto_mes')]
    public function gastoMes(Request $request, DetalleFacturaRepository $detalleFacturaRepository, PartidaRepository $partidaRepository):Response
    {
        $form = $this->createForm(GastoMesFormType::class);
        $form->handleRequest($request);
        $info = array();
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $partidas = $partidaRepository->findBy(['nivel' => $data->getNivel()]);
            foreach ($partidas as $partida => $value) {
                # code...
                $detalleinfo = $detalleFacturaRepository->getAllSumByPartidaAndMonth($data->getObraNombre(), $value->getCodigo(), $data->getFecha());
                if ($detalleinfo){
                    $sum = 0;
                    $par = new Partida();
                    foreach ($detalleinfo as $key1 => $value1) {
                        # code...
                        $sum += $value1['total'];
                    }
                    $par->setCodigo($value->getCodigo());
                    $par->setNombre($value->getNombre());
                    $par->setTotal($sum);
                    $info[] = $par;
                }
            }
        }

        return $this->render('cuadre/gastomes.html.twig', [
            'form' => $form->createView(),
            'rubros' => $info,
        ]);
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

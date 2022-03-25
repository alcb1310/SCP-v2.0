<?php

namespace App\Controller;

use App\Entity\DetalleFactura;
use App\Form\DetalleFacturaFormType;
use App\Repository\DetalleFacturaRepository;
use App\Repository\FacturaRepository;
use App\Repository\PartidaRepository;
use App\Repository\PresupuestoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Json;

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
            // return $this->redirectToRoute('detalle_add', [
            //     'factura' => $factura,
            // ]);
            return $this->redirectToRoute('factura_edit', [
                'id' => $factura 
            ]);
            return new Response(null, 203);
        } else {
            $this->addFlash('error', 'No se pudo borrar el detalle');
            // return $this->redirectToRoute('detalle_add', [
            //     'factura' => $factura,
            // ]);
        }
        return  new Response('borrando');
    }

    #[Route("/graba/detallefactura", methods:'POST')]
    public function saveDetalleFactura(Request $request, FacturaRepository $facturaRepository, PartidaRepository $partidaRepository, PresupuestoRepository $presupuestoRepository){
        dump($request);
        $facturaId = $request->query->get('factura');
        $factura = $facturaRepository->findOneBy(['id' => $facturaId]);
        $partidaId = $request->query->get('partida');
        $partida = $partidaRepository->findOneBy(['id' => $partidaId]);

        $detalle = new DetalleFactura();
        $detalle->setFactura($factura);
        $detalle->setPartida($partida);
        $detalle->setCantidad($request->query->get('cantidad'));
        $detalle->setTotal($request->query->get('total'));
        $detalle->setUnitario($request->query->get('unitario'));

        $result = $presupuestoRepository->grabaFactura($detalle, $partida, $detalle->getFactura()->getObra(), $request->query->get('total'), $request->query->get('cantidad'), $request->query->get('unitario'));
    
        return new Response($result);
    }
}

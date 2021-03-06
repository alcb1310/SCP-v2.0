<?php
namespace App\Controller;

use App\Entity\Partida;
use App\Repository\ObraRepository;
use Symfony\UX\Chartjs\Model\Chart;
use App\Repository\ActualRepository;
use App\Repository\PartidaRepository;
use App\Repository\PresupuestoRepository;
use App\Repository\DetalleFacturaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class ReportesController extends AbstractController{

     #[Route('/reportes/detallemes')]
     public function detalleFacturasMes(Request $request, ObraRepository $obraRepository, DetalleFacturaRepository $detalleFacturaRepository)
     {
          $partidaCod = $request->query->get('partida');
          $fecha = $request->query->get('fecha');
          $obraId = $request->query->get('obra');

          $obra = $obraRepository->findOneBy(['id' => $obraId]);

          $facturas = $detalleFacturaRepository->getAllByPartidaAndFecha($obra->getNombre(), $partidaCod, $fecha);

          return new JsonResponse($facturas);
     }

     #[Route('/reportes/gastomes')]
     public function gastoMensual(Request $request, ObraRepository $obraRepository, PartidaRepository $partidaRepository, DetalleFacturaRepository $detalleFacturaRepository)
     {
          $obraId = $request->query->get('obra');
          $nivel = $request->query->get('nivel');
          $fecha = $request->query->get('fecha');

          $obra = $obraRepository->findOneBy(['id' => $obraId]);
          $partidas = $partidaRepository->findBy(['nivel' => $nivel]);

          $reporte = array();
          foreach ($partidas as $partida){
               $sumDetallePartidas = $detalleFacturaRepository->getAllSumByPartidaAndMonth($obra->getNombre(), $partida->getCodigo(), $fecha);
               if ($sumDetallePartidas){
                    $par = array();
                    $total=0;
                    foreach ($sumDetallePartidas as $sumDetallePartida){
                         $total+=$sumDetallePartida['total'];
                    }
                    $par['codigo'] = $partida->getCodigo();
                    $par['nombre'] = $partida->getNombre();
                    $par['total'] = $total;
                    $reporte[] = $par;
               }
          }
          
          return new JsonResponse($reporte);
     }

     #[Route('/reportes/gastadoactual', name:'reporte_gastado_actual')]
     public function gastadoActual( ObraRepository $obraRepository, PartidaRepository $partidaRepository, Request $request, ActualRepository $actualRepository, PresupuestoRepository $presupuestoRepository, ChartBuilderInterface $chartBuilder){
          $obras= $obraRepository->getAllActive();
          $partidas = $partidaRepository->findAllParents();
          $obra = null;
          $partida = null;
          $chart = $chartBuilder->createChart(Chart::TYPE_BAR);
          $obraid = $request->query->get('obra');
          $partidaid = $request->query->get('partida');
          if ($obraid){
               $obra = $obraRepository->findOneBy(['id' => $obraid]);
          }

          if ($partidaid){
               $partida = $partidaRepository->findOneBy(['id' => $partidaid]);
          }
          if ($obraid){
               $partidabusca = $partidaRepository->findBy(['padre' => $partida]);
               $actuals = $actualRepository->getReporteActualGastado($obra, $partidabusca);
               $presupuestos = $presupuestoRepository->getReporteActualGastado($obra, $partidabusca);

               $xValuesPresupuesto = array();
               $yValuesPresupuesto = array();
               foreach ($presupuestos as $presupuesto){
                    $xValuesPresupuesto[] = $presupuesto->getPartida()->getNombre();
                    $cod = $presupuesto->getPartida()->getNombre();
                    $yValuesPresupuesto[$cod] = $presupuesto->getRendidoTot();
               }

               $yValuesActual = array();
               $xValuesActual = array();
               foreach ($actuals as $actual){
                    $xValuesActual[] = $actual->getPartida()->getNombre();
                    $cod = $actual->getPartida()->getNombre();
                    $yValuesActual[$cod] = $actual->getTotal();
               }
               $diffs = array_diff($xValuesPresupuesto, $xValuesActual);

               foreach($diffs as $diff){
                    $yValuesActual[$diff] = 0;
               }
               arsort($yValuesPresupuesto);
               arsort($yValuesActual);

               $chart->setData([
                    'labels' => $xValuesPresupuesto,
                    'datasets' => [
                         [
                              'label' => 'Gastado',
                              'borderColor' => 'rgb(0, 102, 153)',
                              'backgroundColor' => 'rgb(0,102,153)',
                              'data' => $yValuesPresupuesto,
                         ],
                         [
                              'label' => 'Avance de Obra',
                              'borderColor' => 'rgb(207, 207, 12)',
                              'backgroundColor' =>'rgb(207, 207, 12)',
                              'data' => $yValuesActual,
                         ],
                    ]
               ]);

               $chart->setOptions([
                    'plugins' => [
                         'title' => [
                              'display' => true,
                              'text' => $obra->getNombre().' Gasto vs. Construido',
                              'color' => 'rgb(0,102,153)',
                              'font' => [
                              'size' => 20,
                              'weight' => 300,
                              ],
                         ],
                         'legend' => [
                              'display' => true,
                              'position' => 'bottom',  
                         ]
                    ],
               ]);
               return $this->render('reportes/actualGastado.html.twig', [
                    'obras' => $obras,
                    'partidas' => $partidas,
                    'obraid' => $obraid,
                    'partidaid' => $partidaid,
               'chart' => $chart,
               ]);
          }

          return $this->render('reportes/actualGastado.html.twig', [
               'obras' => $obras,
               'partidas' => $partidas,
               'obraid' => $obraid,
               'partidaid' => $partidaid,
          ]);

     }
}
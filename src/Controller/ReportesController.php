<?php
namespace App\Controller;

use App\Repository\ActualRepository;
use App\Repository\ObraRepository;
use App\Repository\PartidaRepository;
use App\Repository\PresupuestoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class ReportesController extends AbstractController{

     #[Route('/reportes/gastadoactual', name:'reporte_gastado_actual')]
     public function gastadoActual( ObraRepository $obraRepository, PartidaRepository $partidaRepository, Request $request, ActualRepository $actualRepository, PresupuestoRepository $presupuestoRepository, ChartBuilderInterface $chartBuilder){
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
                              'label' => 'Presupuesto',
                              'borderColor' => 'rgb(0, 102, 153)',
                              'backgroundColor' => 'rgb(0,102,153)',
                              'data' => $yValuesPresupuesto,
                         ],
                         [
                              'label' => 'Ejecutado',
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
          }
          $obras= $obraRepository->getAllActive();
          $partidas = $partidaRepository->findAllParents();

          return $this->render('reportes/actualGastado.html.twig', [
               'obras' => $obras,
               'partidas' => $partidas,
               'obraid' => $obraid,
               'partidaid' => $partidaid,
               'chart' => $chart,
          ]);

     }
}
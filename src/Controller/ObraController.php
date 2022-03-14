<?php

namespace App\Controller;

use App\Form\ObraFormType;
use App\Form\GastoMensualFormType;
use App\Repository\ObraRepository;
use Symfony\UX\Chartjs\Model\Chart;
use App\Repository\FacturaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    #[Route('/obra/gastadomes', name: 'obra_gasmes')]
    public function gastadoMensual(ObraRepository $obraRepository, Request $request)
    {
        $form = $this->createForm(GastoMensualFormType::class);
        $form->handleRequest($request);
        $facturas = [];
        if ($form->isSubmitted() ) { 
            $data = $form->getData();
            $obra = $obraRepository->findOneBy(['nombre' => $data->getNombre()]);
            $facturas = $obraRepository->getSumFacturaTotalByYearAndMonth($obra);
        }

        $obras = $obraRepository->getAllActive();

        return $this->render('obra/gastadomensual.html.twig', [
            'valores' => $facturas,
            'obras' => $obras   
        ]);
    }

    #[Route('/obra/gasto/{obraid}', methods:'GET')]
    public function gastoMes($obraid, ObraRepository $obraRepository, FacturaRepository $facturaRepository) : Response
    {
        $obra = $obraRepository->findOneBy(['id' => $obraid]);
        $data = $obraRepository->getSumFacturaTotalByYearAndMonth($obra);
        // $datajs = json_encode($data);
        return new JsonResponse($data);
    }

    #[Route('/obra/mensual/', name:'reporte_gasto_mensual')]
    public function gastoMensualporObra( ObraRepository $obraRepository, Request $request, ChartBuilderInterface $chartBuilder){
        $obra = $request->query->get('obra');
        $obra = $obraRepository->findOneBy(['id' => 2]);
        $datas = $obraRepository->getSumFacturaTotalByYearAndMonth($obra);

        $xValuesGastado = array();
        $yValuesGastado = array();
        foreach ($datas as $data){
            $xValuesGastado[] = $data['year'] . '/' . $data['month'];
            $yValuesGastado[] = $data['total'];
        }

        $chart = $chartBuilder->createChart(Chart::TYPE_LINE);
        $chart->setData([
            'labels' => $xValuesGastado,
            'datasets' => [
                [
                    'label' => 'Gasto Mensual',
                    'borderColor' => 'rgb(0, 102, 153)',
                    'backgroundColor' => 'rgb(0,102,153)',
                    'data' => $yValuesGastado,
                    'tension' => 0.4
                ],
            ],
        ]);

        $chart->setOptions([
            'plugins' => [
                'title' => [
                    'display' => true,
                    'text' => $obra->getNombre().' Gasto Mensual',
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

        $obra = $obraRepository->getAllActive();

        return $this->render('obra/gastoMensualResult.html.twig', [
            'obras' => $obra,
            'chart' => $chart,
        ]);
    }
}

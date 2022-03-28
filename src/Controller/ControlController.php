<?php

namespace App\Controller;

use App\Form\ControlFormType;
use App\Repository\ControlRepository;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

class ControlController extends AbstractController
{
    #[Route('/control', name: 'control_find')]
    public function index(Request $request, ControlRepository $controlRepository): Response
    {
        $form = $this->createForm(ControlFormType::class);
        $form->handleRequest($request);
        
        $control=[];
        $fecha = null;
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $fecha = $data->getFecha();
            $control = $controlRepository->getByNivel($data->getObra()->getId(), $data->getNivel(), $data->getFecha());
        }
        return $this->render('control/index.html.twig', [
            'form' => $form->createView(),
            'controles' => $control,
            'fecha' => $fecha
        ]);
    }

    #[Route('/control/gethistorico/{obraid}/{fecha}/{nivel}', methods:'GET')]
    public function getControlHistorico($obraid, $fecha, $nivel, ControlRepository $controlRepository): JsonResponse
    {
        $controls = $controlRepository->getByNivel($obraid, $nivel, $fecha);


        $serializer = new Serializer(array(new GetSetMethodNormalizer()), array('json' => new 
        JsonEncoder()));
        // $result = $serializer->normalize($controls, null, ['groups' => 'control:read']);
        // $serializer = $container->get('jms_serializer');
        // $serializer->serialize($controls, 'json' );
        $json = $serializer->normalize($controls, 'json', [
            'groups' => 'control:read'
        ]);

        // $json = $serializer->encode($controls, 'json', ['groups' => 'control:read']);


        return new JsonResponse($json);
    }

    #[Route('/exports/excel/control/{obraid}/{date}/{nivel}')]
    public function exportToExcel($obraid, $date, $nivel, ControlRepository $controlRepository){
        $controls = $controlRepository->getByNivel($obraid, $nivel, $date);

        $array = array();

        $obra ="";
        $casas = 0;
        $prevAcumula = false;
        foreach ($controls as $control){
            $obra = $control->getObra()->getNombre();
            $casas = $control->getObra()->getCasas();
            if ($control->getPartida()->getAcumula()){
                $prevAcumula= true;
                $array[] = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                ];
            } else {
                if ($prevAcumula){
                    $prevAcumula = false;
                    $array[] = [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                    ];
                }
            }
            $porcentajeAvance = 0;
            if ($control->getPresactu() != 0){
                $porcentajeAvance = $control->getRendidotot()/$control->getPresactu();
            }
            $array[]=[
                $control->getPartida()->getCodigo(),
                $control->getPartida()->getNombre(),
                $control->getCantini(),
                $control->getCostoini(),
                $control->getTotalini(),
                $control->getRendidocant(),
                $control->getRendidotot(),
                $control->getPorgascan(),
                $control->getPorgascost(),
                $control->getPorgastot(),
                $control->getPresactu(),
                $porcentajeAvance,
            ];
        }

        $arraySize = count($array) + 8;

        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle($date);

        $sheet->getCell('A1')->setValue('CONTROL PRESUPUESTARIO');
        $sheet->getCell('A3')->setValue('Obra');
        $sheet->getCell('B3')->setValue($obra);
        $sheet->getCell('A4')->setValue('Casas');
        $sheet->getCell('B4')->setValue($casas);
        $sheet->getCell('K3')->setValue('Fecha');
        $sheet->getCell('L3')->setValue(Date::PHPToExcel($date));
        $sheet->getCell('A6')->setValue('Codigo');
        $sheet->getCell('B6')->setValue('Partida');
        $sheet->getCell('C6')->setValue('Inicial');
        $sheet->getCell('F6')->setValue('Rendido');
        $sheet->getCell('H6')->setValue('Por Gastar');
        $sheet->getCell('K6')->setValue('Presupuesto Actualizado');
        $sheet->getCell('L6')->setValue('% Gastado');
        $sheet->getCell('C7')->setValue('Cantidad');
        $sheet->getCell('D7')->setValue('Unitario');
        $sheet->getCell('E7')->setValue('Total');
        $sheet->getCell('F7')->setValue('Cantidad');
        $sheet->getCell('G7')->setValue('Total');
        $sheet->getCell('H7')->setValue('Cantidad');
        $sheet->getCell('I7')->setValue('Unitario');
        $sheet->getCell('J7')->setValue('Total');

        $sheet->fromArray($array, null, 'A8', true);

        //formatting the cells
        $sheet->mergeCells('A1:L1');
        $sheet->mergeCells('A6:A7');
        $sheet->mergeCells('B6:B7');
        $sheet->mergeCells('K6:K7');
        $sheet->mergeCells('L6:L7');
        $sheet->mergeCells('C6:E6');
        $sheet->mergeCells('F6:G6');
        $sheet->mergeCells('H6:J6');
        // $sheet->mergeCells('C2:I3');
        // $sheet->mergeCells('J2:J3');
        // $sheet->mergeCells('K2:K3');
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $sheet->getColumnDimension('H')->setAutoSize(true);
        $sheet->getColumnDimension('I')->setAutoSize(true);
        $sheet->getColumnDimension('J')->setAutoSize(true);
        $sheet->getColumnDimension('K')->setAutoSize(true);
        $sheet->getColumnDimension('L')->setAutoSize(true);

        $range = 'C8:K' . $arraySize; 

        $sheet->getStyle('A')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_TEXT);
        $sheet->getStyle('B')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_TEXT);
        $sheet->getStyle('L')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_PERCENTAGE_00);
        $sheet->getStyle($range)->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2);
        $sheet->getStyle('L3')->getNumberFormat()->setFormatCode('dd-mmm-yyyy');

        $sheet->getStyle('1')->getAlignment()->setHorizontal('center');
        $sheet->getStyle('6:7')->getAlignment()->setHorizontal('center');
        $sheet->getStyle('1:7')->getFont()->setBold(true);
        $sheet->getStyle('1')->getFont()->setSize(18);
        $sheet->getStyle('6:7')->getAlignment()->setVertical('center');
        $sheet->getStyle('6:7')->getAlignment()->setWrapText(true);
        $sheet->getStyle('A6:L7')->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setARGB('A3A3A3');

        $writer = new Xlsx($spreadsheet);
        $filename = "control " . $date. ".xlsx";
        $writer->save($filename);
        $response = new BinaryFileResponse($filename);
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );

        $response->deleteFileAfterSend(true);

        return $response;
    }
}

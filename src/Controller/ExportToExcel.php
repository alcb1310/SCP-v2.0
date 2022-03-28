<?php
namespace App\Controller;

use DateTime;
use App\Repository\ObraRepository;
use App\Repository\ControlRepository;
use App\Repository\FacturaRepository;
use App\Repository\PartidaRepository;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\Repository\DetalleFacturaRepository;
use Symfony\Component\Routing\Annotation\Route;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ExportToExcel extends AbstractController
{
     #[Route('/exports/excel/gasto-mes/{obraid}/{fecha}/{nivel}')]
     public function gastoMesToExcel($obraid, $fecha, $nivel, ObraRepository $obraRepository, PartidaRepository $partidaRepository, DetalleFacturaRepository $detalleFacturaRepository){

          $obra = $obraRepository->findOneBy(['id' => $obraid]);
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
                    $par[] = $partida->getCodigo();
                    $par[] = $partida->getNombre();
                    $par[] = $total;
                    $reporte[] = $par;
               }
          }

          $spreadsheet = new Spreadsheet();

          $sheet = $spreadsheet->getActiveSheet();
          $sheet->setTitle($fecha);

          // heading section
          $sheet->getCell('A1')->setValue('GASTADO EN EL MES');
          $sheet->getCell('A2')->setValue("GASTO POR PARTIDA");
          $sheet->getCell('A4')->setValue('Obra');
          $sheet->getCell('B4')->setValue($obra->getNombre());
          $sheet->getCell('A5')->setValue('Casas');
          $sheet->getCell('B5')->setValue($obra->getCasas());
          $sheet->getCell('A6')->setValue('Nivel');
          $sheet->getCell('B6')->setValue($nivel);
          $sheet->getCell('A7')->setValue('Fecha');
          $sheet->getCell('B7')->setValue(Date::PHPToExcel($fecha));

          // title section
          $sheet->getCell('A9')->setValue('Código');
          $sheet->getCell('B9')->setValue('Partida');
          $sheet->getCell('C9')->setValue('Total');

          // import data to cell A10 avoiding all nulls
          $sheet->fromArray($reporte, null, 'A10', true);

          // autosizing cell width

          $sheet->getColumnDimension('A')->setAutoSize(true);
          $sheet->getColumnDimension('B')->setAutoSize(true);
          $sheet->getColumnDimension('C')->setAutoSize(true);

          // format the cells for the report
          $sheet->mergeCells('A1:C1');
          $sheet->mergeCells('A2:C2');
          $sheet->getStyle('A')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_TEXT);
          $sheet->getStyle('C')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2);
          $sheet->getStyle('B5')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_TEXT);
          $sheet->getStyle('B6')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_TEXT);
          $sheet->getStyle('B7')->getNumberFormat()->setFormatCode('dd-mmm-yyyy');
          $sheet->getStyle('1:2')->getAlignment()->setHorizontal('center');
          $sheet->getStyle('1:7')->getFont()->setBold(true);
          $sheet->getStyle('1')->getFont()->setSize(18);
          $sheet->getStyle('2')->getFont()->setSize(14);
          $sheet->getStyle('A9:C9')->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setARGB('A3A3A3');
          
          $writer = new Xlsx($spreadsheet);
          $filename = "gasto-mes " . $fecha. "-". $nivel .".xlsx";
          $writer->save($filename);
          $response = new BinaryFileResponse($filename);
          $response->setContentDisposition(
               ResponseHeaderBag::DISPOSITION_ATTACHMENT,
               $filename
          );

          $response->deleteFileAfterSend(true);

          return $response;

     }

    #[Route('/exports/excel/cuadre/{obraid}/{fecha}')]
    public function cuadreExportToExcel($obraid, $fecha, ObraRepository $obraRepository, FacturaRepository $facturaRepository){
          $obra = $obraRepository->findOneBy(['id' => $obraid] );
          $date = new DateTime($fecha);
          $facturas = $facturaRepository->getAllInMonth($obra, $date);

          $obra="";
          $array=[];
          foreach($facturas as $factura){
               $obra = $factura->getObra()->getNombre();
               $data = [
                    Date::PHPToExcel($factura->getFecha()),
                    $factura->getProveedor()->getNombre(),
                    $factura->getNumero(),
                    $factura->getTotal()
               ];
               $array[] = $data;
          }

          $spreadsheet = new Spreadsheet();

          $sheet = $spreadsheet->getActiveSheet();
          $sheet->setTitle($fecha);

          $sheet->getCell('A1')->setValue('CUADRE');
          $sheet->getCell('A3')->setValue('Obra');
          $sheet->getCell('B3')->setValue($obra);
          $sheet->getCell('A4')->setValue('Fecha');
          $sheet->getCell('B4')->setValue(Date::PHPToExcel($fecha));
          $sheet->getCell('A6')->setValue("Fecha");
          $sheet->getCell('B6')->setValue("Número");
          $sheet->getCell('C6')->setValue("Proveedor");
          $sheet->getCell('D6')->setValue("Total");

          $sheet->fromArray($array, null, 'A7', true);
          $sheet->mergeCells('A1:D1');

          $sheet->getColumnDimension('A')->setAutoSize(true);
          $sheet->getColumnDimension('B')->setAutoSize(true);
          $sheet->getColumnDimension('C')->setAutoSize(true);
          $sheet->getColumnDimension('D')->setAutoSize(true);

          $sheet->getStyle('D')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2);
          $sheet->getStyle('B4')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_DATE_YYYYMMDD);
          $sheet->getStyle('A')->getNumberFormat()->setFormatCode('dd-mmm-yyyy');
          $sheet->getStyle('C')->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_TEXT);

          $sheet->getStyle('1')->getAlignment()->setHorizontal('center');
          $sheet->getStyle('6')->getAlignment()->setHorizontal('center');
          $sheet->getStyle('1:6')->getFont()->setBold(true);
          $sheet->getStyle('1')->getFont()->setSize(18);
          $sheet->getStyle('6')->getAlignment()->setVertical('center');
          $sheet->getStyle('6')->getAlignment()->setWrapText(true);
          $sheet->getStyle('A6:D6')->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setARGB('A3A3A3');
          
          $writer = new Xlsx($spreadsheet);
          $filename = "cuadre " . $fecha. ".xlsx";
          $writer->save($filename);
          $response = new BinaryFileResponse($filename);
          $response->setContentDisposition(
               ResponseHeaderBag::DISPOSITION_ATTACHMENT,
               $filename
          );

          $response->deleteFileAfterSend(true);

          return $response;
     }

     #[Route('/exports/excel/control/{obraid}/{date}/{nivel}')]
     public function controlPorFechaExportToExcel($obraid, $date, $nivel, ControlRepository $controlRepository){
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
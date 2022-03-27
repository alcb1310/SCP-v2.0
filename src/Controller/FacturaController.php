<?php

namespace App\Controller;

use DateTime;
use App\Form\FacturaFormType;
use App\Repository\ObraRepository;
use App\Repository\FacturaRepository;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
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

    #[Route('/exports/excel/cuadre/{obraid}/{fecha}')]
    public function exportToExcel($obraid, $fecha, ObraRepository $obraRepository, FacturaRepository $facturaRepository){
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
        $filename = "text.xlsx";
        $writer->save($filename);
        $filename = $filename;
        $response = new BinaryFileResponse($filename);

        $response->deleteFileAfterSend(true);

        return $response;
    }

    #[Route('/cuadre', name: 'cuadre')]
    public function cuadre(): Response
    {
            return $this->render('cuadre/index.html.twig');
    }

}

<?php

namespace App\Controller;

use App\Form\ControlFormType;
use App\Repository\ControlRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer;

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

        dd($serializer);

        return new JsonResponse($json);
    }
}

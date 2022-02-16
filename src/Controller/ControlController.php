<?php

namespace App\Controller;

use App\Form\ControlFormType;
use App\Repository\ControlRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ControlController extends AbstractController
{
    #[Route('/control', name: 'control_find')]
    public function index(Request $request, ControlRepository $controlRepository): Response
    {
        $form = $this->createForm(ControlFormType::class);
        $form->handleRequest($request);
        
        $control=[];
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();

            $control = $controlRepository->getByNivel($data->getObra()->getId(), $data->getNivel(), $data->getFecha());
        }
        return $this->render('control/index.html.twig', [
            'form' => $form->createView(),
            'controles' => $control,
        ]);
    }
}

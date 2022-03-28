<?php

namespace App\Controller;

use Pagerfanta\Pagerfanta;
use App\Form\PartidaFormType;
use App\Repository\ObraRepository;
use App\Repository\PartidaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Constraints\Json;

class PartidaController extends AbstractController
{
    #[Route('/partida', name: 'partida_show')]
    public function index(PartidaRepository $partidaRepository, Request $request): Response
    {
        $partida=$partidaRepository->getAllOrderedByCodigo();

        $pagerfanta = new Pagerfanta(new QueryAdapter($partida));
        $pagerfanta->setMaxPerPage(20);
        $pagerfanta->setCurrentPage($request->query->get('page', 1));

        // return $this->render('partida/index.html.twig', [
        //     'pager' => $partida,
        // ]);

        return $this->render('partida/index.html.twig', [
            'pager' => $pagerfanta,
        ]);
    }

    #[Route('/partida/add', name: 'partida_add')]
    public function add(Request $request, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(PartidaFormType::class);
        $form->handleRequest($request);
        $referer = (string) $request->headers->get('referer');
        dump($referer);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $referer = $request->request->get('referer');
            dump($referer);
            $data = $form->getData();
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Partida creada satisfactoriamente');
            return $this->redirect($referer);
        }
        return $this->render('partida/form.html.twig', [
            'form' => $form->createView(),
            'referer' => $referer,
        ]);
    }

    #[Route('/partida/edit/{id}', name: 'partida_edit')]
    public function edit($id, Request $request, EntityManagerInterface $em, PartidaRepository $partidaRepository): Response
    {
        $partida = $partidaRepository->findOneBy(['id' => $id]);
        $form = $this->createForm(PartidaFormType::class, $partida);
        $form->handleRequest($request);
        $referer = (string) $request->headers->get('referer');
        
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $referer = $request->request->get('referer');
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Partida actualizada satisfactoriamente');
            // return $this->redirectToRoute('partida_show');
            return $this->redirect($referer);
        }
        return $this->render('partida/form.html.twig', [
            'form' => $form->createView(),
            'referer' => $referer,
        ]);
    }

    #[Route('/get/partidas/{obraid}')]
    public function getPartidasByObra($obraid, PartidaRepository $partidaRepository, ObraRepository $obraRepository){
        $obra = $obraRepository->findOneBy(['id' => $obraid]);
        $partidas = $partidaRepository->findAllChildsOrdered($obra);

        $array = array();
        foreach ($partidas as $partida) {
            # code...
            $arrayHelper = array();
            $arrayHelper['id'] = $partida->getId();
            $arrayHelper['codigo'] = $partida->getCodigo();
            $arrayHelper['nombre'] = $partida->getNombre();
            $array[] = $arrayHelper;
        }

        // dd (json_encode($array));

        // dd($partidasJSON);
        // return new Response($partidasJSON);
        return new Response(json_encode($array));
    }
}

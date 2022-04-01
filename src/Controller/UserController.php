<?php

namespace App\Controller;

use App\Form\UserFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    #[Route('/user', name: 'user_show')]
    public function index(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return $this->render('user/index.html.twig', [
            'users' => $users,
        ]);
    }

    #[Route('/api/user/changepass', methods:['POST'])]
    public function apiChangePassword(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $em, UserRepository $userRepository): Response
    {
        $parameters = json_decode($request->getContent(), true);
        // dump($request->request->get('username'), $request->request->get('password'));
        $em->beginTransaction();
        try{
            // $user = $userRepository->findOneBy(['username' => $request->request->get('username')]);
            // $user->setPlainPassword($request->request->get('password'));
            $user = $userRepository->findOneBy(['username' => $parameters['username']]);
            $user->setPlainPassword($parameters['password']);
            $user->setPassword($passwordHasher->hashPassword($user, $user->getPlainPassword()));
            // $user->eraseCredentials();

            dump($user);
            // $em->persist($user);
            $em->flush();
            $em->commit();
            $this->addFlash("success", "Contraseña actualizada");
            dump('flash');
            return $this->redirect('/');
            return $this->redirectToRoute('app_homepage');

        } catch (Exception $e){
            $em->rollback();
            return new JsonResponse($e->getMessage(), $e->getCode());
        }
        return new JsonResponse($user, 204);
    }


    #[Route('/user/add', name: 'user_add')]
    public function add(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher): Response
    {
        $form = $this->createForm(UserFormType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            $data = $form->getData();
            $data->setPassword($passwordHasher->hashPassword($data, $data->getPlainPassword()));
            $em->persist($data);
            $em->flush();
            $this->addFlash('success', 'Usuario creado satisfactoriamente');
            return $this->redirectToRoute('user_show');
        }
        return $this->render('user/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

     #[Route('/user/changepass', name:'app_change_password')]
     public function changePassword():Response
     {
          return $this->render('security/changepassword.html.twig');
     }
}

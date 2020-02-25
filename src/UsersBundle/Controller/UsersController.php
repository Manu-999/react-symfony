<?php

namespace UsersBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use UsersBundle\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UsersController extends Controller {


    public function indexAction(): Response {
        
        return $this->render('UsersBundle:Default:index.html.twig');
    }


    public action registerAction($userName, $email, $password) {

        $doctrineManager = $this->getDoctrine()->getManager();

        $user = new User();
        $user->setUserName($userName);
        $user->setEmail($email);
        $user->setPassword($password);

        $doctrineManager->persist($user);

        $doctrineManager->flush();


    }
}

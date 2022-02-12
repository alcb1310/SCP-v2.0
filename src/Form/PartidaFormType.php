<?php

namespace App\Form;

use App\Entity\Partida;
use App\Repository\PartidaRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartidaFormType extends AbstractType
{
    private $partida;

    public function __construct(PartidaRepository $partida)
    {
        $this->partida = $partida;
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('codigo')
            ->add('nombre')
            ->add('padre', EntityType::class, [
                'class' => Partida::class,
                'label' => 'Partida padre',
                'placeholder' => '--- Seleccione una partida ---',
                'required' => false,
                'choices' => $this->partida
                    ->findAllParents(),
            ])
            ->add('nivel', NumberType::class)
            ->add('acumula')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Partida::class,
        ]);
    }
}

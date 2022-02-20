<?php

namespace App\Form;

use App\Entity\Obra;
use App\Entity\Actual;
use App\Entity\Partida;
use App\Repository\ObraRepository;
use App\Repository\PartidaRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActualFormType extends AbstractType
{
    private $obra;
    private $partida;

    public function __construct(ObraRepository $obraRepository, PartidaRepository $partida)
    {
        $this->obra = $obraRepository;
        $this->partida = $partida;
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('obra', EntityType::class,[
                'class' => Obra::class,
                'placeholder' => '--- Seleccione una obra ---',
                'choices' => $this->obra->getAllActive(),
            ])
            ->add('partida', EntityType::class, [
                'class' => Partida::class,
                'label' => 'Partida',
                'placeholder' => '--- Seleccione una partida ---',
                'choices' => $this->partida
                    ->findAllParents(),
            ])
            ->add('casas')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Actual::class,
        ]);
    }
}

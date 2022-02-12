<?php

namespace App\Form;

use App\Entity\Obra;
use App\Entity\Partida;
use App\Entity\Presupuesto;
use App\Repository\ObraRepository;
use App\Repository\PartidaRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PresupuestoFormType extends AbstractType
{
    private $partida;
    private $obra;

    public function __construct(PartidaRepository $partida, ObraRepository $obra)
    {
        $this->partida = $partida;
        $this->obra = $obra;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('obra', EntityType::class, [
                'class' => Obra::class,
                'placeholder' => '--- Seleccione una obra ---',
                'choices' => $this->obra
                    ->getAllActive(),
            ])
            ->add('partida', EntityType::class, [
                'class' => Partida::class,
                'placeholder' => '--- Seleccione una partida ---',
                'choices' => $this->partida
                    ->findAllChilds(),
            ])
            ->add('porgascan', NumberType::class, [
                'label' => 'Cantidad',
            ])
            ->add('porgascost', NumberType::class, [
                'label' => 'Unitario',
            ])
            ->add('porgastot', NumberType::class, [
                'label' => 'Total',
                'disabled' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Presupuesto::class,
        ]);
    }
}

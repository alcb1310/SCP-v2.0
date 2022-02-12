<?php

namespace App\Form;

use App\Entity\Presupuesto;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PresupuestoFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('cantini')
            ->add('costoini')
            ->add('totalini')
            ->add('rendidocant')
            ->add('rendidotot')
            ->add('porgascan')
            ->add('porgascost')
            ->add('porgastot')
            ->add('presactu')
            ->add('obra')
            ->add('partida')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Presupuesto::class,
        ]);
    }
}

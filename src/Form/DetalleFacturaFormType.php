<?php

namespace App\Form;

use App\Entity\Partida;
use App\Entity\DetalleFactura;
use App\Entity\Obra;
use App\Repository\PartidaRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DetalleFacturaFormType extends AbstractType
{
    private $partida;
    private $obra;

    public function __construct(PartidaRepository $partida)
    {
        $this->partida = $partida;
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('obranombre', null, [
                'disabled' =>true,
                'label' =>'Obra',
            ])
            ->add('proveedornombre', null, [
                'disabled' =>true,
                'label' => 'Proveedor',
            ])
            ->add('facturanum', null, [
                'disabled' => true,
                'label' => 'numero'
            ])
            ->add('partida', EntityType::class, [
                'class' => Partida::class,
                'placeholder' => '--- Seleccione una partida ---',
                'choices' => $this->partida->findAllChilds(),
            ])
            ->add('cantidad')
            ->add('unitario')
            ->add('total', null,[
                'required' =>false,
                'disabled' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DetalleFactura::class,
        ]);
    }
}

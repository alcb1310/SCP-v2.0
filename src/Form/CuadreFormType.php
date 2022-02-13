<?php

namespace App\Form;

use App\Entity\Obra;
use App\Entity\Factura;
use App\Repository\ObraRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class CuadreFormType extends AbstractType
{
    private $obra;

    public function __construct(ObraRepository $obraRepository)
    {
        $this->obra = $obraRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('obra', EntityType::class, [
                'class' => Obra::class,
                'placeholder' => '---Seleccione una obra --',
                'choices' => $this->obra
                    ->getAllActive(),
            ])
            ->add('fecha', DateType::class, [
                'placeholder' => 'Ingrese la fecha',
                'widget' => 'single_text'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Factura::class,
        ]);
    }
}

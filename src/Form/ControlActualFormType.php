<?php

namespace App\Form;

use App\Entity\Obra;
use App\Entity\Presupuesto;
use App\Repository\ObraRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ControlActualFormType extends AbstractType
{
    private $obra;

    public function __construct(ObraRepository $obra)
    {
        $this->obra = $obra;
    }
    
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('obra', EntityType::class,[
                'class' => Obra::class,
                'placeholder' => '--- Seleccione una obra ---',
                'choices' => $this->obra
                    ->getAllActive(),
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

<?php

namespace App\Form;

use App\Entity\Obra;
use App\Entity\DetalleFactura;
use App\Repository\ObraRepository;
use App\Repository\PartidaRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class GastoMesFormType extends AbstractType
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
        $tests = $this->partida->getAllNiveles();
        $choice = array();
        $i=0;
        foreach( $tests as $test){
            $choice[$i] = $test['nivel'] ;
            $i++;
        }
        $builder
            ->add('obranombre', EntityType::class,[
                'class' => Obra::class,
                'label' => 'Obra',
                'placeholder' => '--- Seleccione una obra ---',
                'choices' => $this->obra
                    ->getAllActive(),
            ])
            ->add('fecha', DateType::class, [
                'placeholder' => 'Ingrese la fecha',
                'widget' => 'single_text'
            ])
            ->add('nivel', ChoiceType::class,[
                // 'class' => Partida::class,
                // 'label' => 'Nivel',
                'placeholder' => '--- Seleccione un nivel ---',
                'choices' => $choice ,
                'choice_label' => function ($choice, $key, $value){
                    return $value;
                }
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

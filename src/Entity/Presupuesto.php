<?php

namespace App\Entity;

use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PresupuestoRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\ORM\Mapping\UniqueConstraint;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: PresupuestoRepository::class)]
#[UniqueEntity(
    fields:['obra', 'partida'],
    errorPath:'partida',
    message:'Ya existe esa partida en la obra'
)]
#[UniqueConstraint(
    columns: ['obra_id', 'partida_id']
)]
#[ApiResource(
    attributes:[
        'pagination_enabled' => false,
    ],
    collectionOperations:[
        'get' =>[
            'normalization_context' =>[
                'groups' =>['presupuesto:read']
            ]
        ],
    ], 
    itemOperations: [
        'get' =>[
            'normalization_context' =>[
                'groups' =>['presupuesto:read']
            ]
        ],
    ],
    normalizationContext:[
        'groups' => [
            'presupuesto:read'
        ]
    ],
    denormalizationContext:[
        'groups' => [
            'presupuesto:write'
        ]
    ]
)]
#[ApiFilter(
    SearchFilter::class,
    properties:[
        'obra' => 'exact'
    ]
)]
class Presupuesto
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;
    
    #[ORM\ManyToOne(targetEntity: Obra::class, inversedBy: 'presupuestos')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups([
        'presupuesto:read'
    ])]
    private $obra;

    #[ORM\ManyToOne(targetEntity: Partida::class, inversedBy: 'presupuestos')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups([
        'presupuesto:read'
    ])]
    private $partida;

    #[ORM\Column(type: 'float', nullable: true)]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $cantini;

    #[ORM\Column(type: 'float', nullable: true)]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $costoini;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $totalini;

    #[ORM\Column(type: 'float', nullable: true)]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $rendidocant;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $rendidotot;

    #[ORM\Column(type: 'float', nullable: true)]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $porgascan;

    #[ORM\Column(type: 'float', nullable: true)]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $porgascost;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $porgastot;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'presupuesto:read',
        'presupuesto:write'
    ])]
    private $presactu;

    private $nivel;


    public function setNivel($nivel)
    {
        $this->nivel = $nivel;
    }

    #[Groups([
        'presupuesto:read'
    ])] 
    public function getNivel()
    {
        return $this->partida->getNivel();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getObra(): ?Obra
    {
        return $this->obra;
    }

    public function setObra(?Obra $obra): self
    {
        $this->obra = $obra;

        return $this;
    }

    public function getPartida(): ?Partida
    {
        return $this->partida;
    }

    public function setPartida(?Partida $partida): self
    {
        $this->partida = $partida;

        return $this;
    }

    public function getCantini(): ?float
    {
        return $this->cantini;
    }

    public function setCantini(float $cantini): self
    {
        $this->cantini = $cantini;

        return $this;
    }

    public function getCostoini(): ?float
    {
        return $this->costoini;
    }

    public function setCostoini(?float $costoini): self
    {
        $this->costoini = $costoini;

        return $this;
    }

    public function getTotalini(): ?float
    {
        return $this->totalini;
    }

    public function setTotalini(float $totalini): self
    {
        $this->totalini = $totalini;

        return $this;
    }

    public function getRendidocant(): ?float
    {
        return $this->rendidocant;
    }

    public function setRendidocant(?float $rendidocant): self
    {
        $this->rendidocant = $rendidocant;

        return $this;
    }

    public function getRendidotot(): ?float
    {
        return $this->rendidotot;
    }

    public function setRendidotot(float $rendidotot): self
    {
        $this->rendidotot = $rendidotot;

        return $this;
    }

    public function getPorgascan(): ?float
    {
        return $this->porgascan;
    }

    public function setPorgascan(?float $porgascan): self
    {
        $this->porgascan = $porgascan;

        return $this;
    }

    public function getPorgascost(): ?float
    {
        return $this->porgascost;
    }

    public function setPorgascost(?float $porgascost): self
    {
        $this->porgascost = $porgascost;

        return $this;
    }

    public function getPorgastot(): ?float
    {
        return $this->porgastot;
    }

    public function setPorgastot(float $porgastot): self
    {
        $this->porgastot = $porgastot;

        return $this;
    }

    public function getPresactu(): ?float
    {
        return $this->presactu;
    }

    public function setPresactu(float $presactu): self
    {
        $this->presactu = $presactu;

        return $this;
    }
}

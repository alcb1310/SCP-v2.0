<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ActualRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: ActualRepository::class)]
#[UniqueEntity(
    fields: ['obra', 'partida'],
    errorPath: 'partida',
    message: 'La partida en esa obra ya existe'
)]
#[UniqueConstraint(
    columns: ['obra_id', 'partida_id']
)]
#[ApiResource()]
class Actual
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Obra::class, inversedBy: 'actuals')]
    #[ORM\JoinColumn(nullable: false)]
    private $obra;

    #[ORM\ManyToOne(targetEntity: Partida::class, inversedBy: 'actuals')]
    #[ORM\JoinColumn(nullable: false)]
    private $partida;

    #[ORM\Column(type: 'float', nullable: true)]
    private $casas;

    #[ORM\Column(type: 'float', nullable: true)]
    private $total;

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

    public function getCasas(): ?float
    {
        return $this->casas;
    }

    public function setCasas(float $casas): self
    {
        $this->casas = $casas;

        return $this;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(?float $total): self
    {
        $this->total = $total;

        return $this;
    }
}

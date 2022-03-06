<?php

namespace App\Entity;

use App\Repository\ActualHistoricoRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: ActualHistoricoRepository::class)]
#[UniqueEntity(
    fields: ['obra', 'partida', 'fecha'],
    errorPath: 'fecha',
    message: 'La partida para esa obra y esa fecha ya existe'
)]
#[UniqueConstraint(
    columns:['obra_id', 'partida_id', 'fecha']
)]
class ActualHistorico
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Obra::class, inversedBy: 'actualHistoricos')]
    #[ORM\JoinColumn(nullable: false)]
    private $obra;

    #[ORM\ManyToOne(targetEntity: Partida::class, inversedBy: 'actualHistoricos')]
    #[ORM\JoinColumn(nullable: false)]
    private $partida;

    #[ORM\Column(type: 'date')]
    private $fecha;

    #[ORM\Column(type: 'float', nullable:true)]
    private $casas;

    #[ORM\Column(type: 'float')]
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

    public function getFecha(): ?\DateTimeInterface
    {
        return $this->fecha;
    }

    public function setFecha(\DateTimeInterface $fecha): self
    {
        $this->fecha = $fecha;

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

    public function setTotal(float $total): self
    {
        $this->total = $total;

        return $this;
    }
}

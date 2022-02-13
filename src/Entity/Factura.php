<?php

namespace App\Entity;

use App\Repository\FacturaRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: FacturaRepository::class)]
#[UniqueEntity(
    fields:['obra', 'proveedor', 'numero'],
    errorPath: 'numero',
    message: 'Factura ya existe',
)]
class Factura
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Obra::class, inversedBy: 'facturas')]
    #[ORM\JoinColumn(nullable: false)]
    private $obra;

    #[ORM\ManyToOne(targetEntity: Proveedor::class, inversedBy: 'facturas')]
    #[ORM\JoinColumn(nullable: false)]
    private $proveedor;

    #[ORM\Column(type: 'string', length: 100)]
    private $numero;

    #[ORM\Column(type: 'date')]
    private $fecha;

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

    public function getProveedor(): ?Proveedor
    {
        return $this->proveedor;
    }

    public function setProveedor(?Proveedor $proveedor): self
    {
        $this->proveedor = $proveedor;

        return $this;
    }

    public function getNumero(): ?string
    {
        return $this->numero;
    }

    public function setNumero(string $numero): self
    {
        $this->numero = $numero;

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

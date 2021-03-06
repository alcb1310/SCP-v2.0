<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DetalleFacturaRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DetalleFacturaRepository::class)]
#[UniqueEntity(
    fields:['factura', 'partida'],
    errorPath:'partida',
    message:'Ya existe esa partida para la factura'
)]
#[UniqueConstraint(
    columns:['factura_id', 'partida_id']
)]
#[ApiResource(
    collectionOperations:[
        'get'
    ],
    itemOperations:[
        'get'
    ]
)]
class DetalleFactura
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups([
        'factura:read'
    ])]
    private $id;

    #[ORM\ManyToOne(targetEntity: Factura::class, inversedBy: 'detalleFacturas')]
    #[ORM\JoinColumn(nullable: false)]
    private $factura;

    #[ORM\ManyToOne(targetEntity: Partida::class, inversedBy: 'detalleFacturas')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups([
        'proveedor:read',
        'factura:read'
    ])]
    private $partida;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'proveedor:read',
        'factura:read'
    ])]
    private $cantidad;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'proveedor:read',
        'factura:read'
    ])]
    private $unitario;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'proveedor:read',
        'factura:read'
    ])]
    private $total;

    private $obranombre;
    private $proveedornombre;
    private $facturanum;
    private $fecha;
    private $nivel;

    public function setNivel($nivel)
    {
        $this->nivel = $nivel;
    }

    public function getNivel()
    {
        return $this->nivel;
    }

    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    public function getFecha()
    {
        return $this->fecha;
    }

    public function setFacturanum($var)
    {
        $this->facturanum = $var;
    }

    public function getFacturanum(): string
    {
        return $this->facturanum;
    }

    public function setProveedornombre($var)
    {
        $this->proveedornombre = $var;
    }

    public function getProveedornombre(): string
    {
        return $this->proveedornombre;
    }
    
    public function getObranombre(): string
    {
        return $this->obranombre;
    }

    public function setObranombre($var)
    {
        $this->obranombre = $var;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFactura(): ?Factura
    {
        return $this->factura;
    }

    public function setFactura(?Factura $factura): self
    {
        $this->factura = $factura;

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

    public function getCantidad(): ?float
    {
        return $this->cantidad;
    }

    public function setCantidad(float $cantidad): self
    {
        $this->cantidad = $cantidad;

        return $this;
    }

    public function getUnitario(): ?float
    {
        return $this->unitario;
    }

    public function setUnitario(float $unitario): self
    {
        $this->unitario = $unitario;

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

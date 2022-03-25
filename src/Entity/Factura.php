<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\FacturaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FacturaRepository::class)]
#[UniqueEntity(
    fields:['obra', 'proveedor', 'numero'],
    errorPath: 'numero',
    message: 'Factura ya existe',
)]
#[UniqueConstraint(
    columns: ['obra_id', 'proveedor_id', 'numero']
)]
#[ApiResource(
    collectionOperations:[
        'get' => [
            'normalization_context' => [
                'groups' => ['factura:read']
            ]
        ],
        'post' => [
            'denormalization_context' => [
                'groups' => ['factura:write']
            ]
        ]
    ],
    itemOperations:[
        'get' => [
            'normalization_context' => [
                'groups' => ['factura:read']
            ]
        ],
        'put' => [
            'denormalization_context' => [
                'groups' => ['factura:write']
            ]
        ]
    ]
)]
#[ApiFilter(
    SearchFilter::class,
    properties:[
        'id'
    ]
)]
class Factura
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups([
        'factura:read'
    ])]
    private $id;

    #[ORM\ManyToOne(targetEntity: Obra::class, inversedBy: 'facturas')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups([
        'proveedor:read',
        'factura:read', 
        'factura:write'
    ])]
    private $obra;

    #[ORM\ManyToOne(targetEntity: Proveedor::class, inversedBy: 'facturas')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups([
        'factura:read',
        'factura:write'
    ])]
    private $proveedor;

    #[ORM\Column(type: 'string', length: 100)]
    #[Groups([
        'proveedor:read',
        'factura:read',
        'factura:write'
    ])]
    private $numero;

    #[ORM\Column(type: 'date')]
    #[Groups([
        'proveedor:read',
        'factura:read',
        'factura:write'
    ])]
    private $fecha;

    #[ORM\Column(type: 'float')]
    #[Groups([
        'proveedor:read',
        'factura:read',
        'factura:write'
    ])]
    private $total;

    #[ORM\OneToMany(mappedBy: 'factura', targetEntity: DetalleFactura::class)]
    #[Groups([
        'proveedor:read',
        'factura:read'
    ])]
    private $detalleFacturas;

    public function __construct()
    {
        $this->detalleFacturas = new ArrayCollection();
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

    /**
     * @return Collection|DetalleFactura[]
     */
    public function getDetalleFacturas(): Collection
    {
        return $this->detalleFacturas;
    }

    public function addDetalleFactura(DetalleFactura $detalleFactura): self
    {
        if (!$this->detalleFacturas->contains($detalleFactura)) {
            $this->detalleFacturas[] = $detalleFactura;
            $detalleFactura->setFactura($this);
        }

        return $this;
    }

    public function removeDetalleFactura(DetalleFactura $detalleFactura): self
    {
        if ($this->detalleFacturas->removeElement($detalleFactura)) {
            // set the owning side to null (unless already changed)
            if ($detalleFactura->getFactura() === $this) {
                $detalleFactura->setFactura(null);
            }
        }

        return $this;
    }

    // TODO:  Eliminar esta funcion para que la forma reciba valores de obra, proveedor y numero de factura
    public function __toString()
    {
        $data = $this->obra->getNombre() . "/" . $this->proveedor->getNombre() . "/" . $this->numero;
        return $data;
    }
}

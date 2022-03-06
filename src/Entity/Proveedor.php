<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProveedorRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProveedorRepository::class)]
#[UniqueEntity(
    fields:['ruc'],
    errorPath:'ruc',
    message:'RUC ya exste'
)]
#[UniqueEntity(
    fields:['nombre'],
    errorPath:'nombre',
    message:'Nombre ya exste'
)]
#[UniqueConstraint(
    columns: ['ruc']
)]
#[UniqueConstraint(
    columns: ['nombre']
)]
#[ApiResource(
    order:[
        'obra.nombre'=> 'ASC',
        'fecha' => 'DESC'
    ],
    collectionOperations:[
        'get'
    ],
    itemOperations:[
        'get'
    ],
    normalizationContext:[
        'groups' => [
            'proveedor:read'
        ]
        ],
        denormalizationContext: [
            'groups' => [
                'proveedor:write'
            ]
        ]
)]
#[ApiFilter(
    SearchFilter::class,
    properties:[
        'nombre' => 'partial',
        'ruc' => 'partial'
    ]
)]
class Proveedor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 20, unique:true)]
    #[Groups([
        'proveedor:read',
        'proveedor:write'
    ])]
    private $ruc;

    #[ORM\Column(type: 'string', length: 255, unique: true)]
    #[Groups([
        'proveedor:read',
        'proveedor:write'
    ])]
    private $nombre;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups([
        'proveedor:read',
        'proveedor:write'
    ])]
    private $contacto;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups([
        'proveedor:read',
        'proveedor:write'
    ])]
    private $telefono;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups([
        'proveedor:read',
        'proveedor:write'
    ])]
    private $email;

    #[ORM\OneToMany(mappedBy: 'proveedor', targetEntity: Factura::class)]
    #[Groups([
        'proveedor:read',
    ])]
    private $facturas;

    public function __construct()
    {
        $this->facturas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRuc(): ?string
    {
        return $this->ruc;
    }

    public function setRuc(string $ruc): self
    {
        $this->ruc = $ruc;

        return $this;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getContacto(): ?string
    {
        return $this->contacto;
    }

    public function setContacto(?string $contacto): self
    {
        $this->contacto = $contacto;

        return $this;
    }

    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(?string $telefono): self
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection|Factura[]
     */
    public function getFacturas(): Collection
    {
        return $this->facturas;
    }

    public function addFactura(Factura $factura): self
    {
        if (!$this->facturas->contains($factura)) {
            $this->facturas[] = $factura;
            $factura->setProveedor($this);
        }

        return $this;
    }

    public function removeFactura(Factura $factura): self
    {
        if ($this->facturas->removeElement($factura)) {
            // set the owning side to null (unless already changed)
            if ($factura->getProveedor() === $this) {
                $factura->setProveedor(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->nombre;
    }
}

<?php

namespace App\Entity;

use App\Repository\ObraRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: ObraRepository::class)]
#[UniqueEntity(
    fields:['nombre'],
    errorPath:'nombre',
    message:'Obra ya existe'
)]
class Obra
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, unique:true)]
    private $nombre;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $casas;

    #[ORM\Column(type: 'boolean')]
    private $activo;

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: Presupuesto::class)]
    private $presupuestos;

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: Factura::class)]
    private $facturas;

    public function __construct()
    {
        $this->presupuestos = new ArrayCollection();
        $this->facturas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCasas(): ?int
    {
        return $this->casas;
    }

    public function setCasas(?int $casas): self
    {
        $this->casas = $casas;

        return $this;
    }

    public function getActivo(): ?bool
    {
        return $this->activo;
    }

    public function setActivo(bool $activo): self
    {
        $this->activo = $activo;

        return $this;
    }

    /**
     * @return Collection|Presupuesto[]
     */
    public function getPresupuestos(): Collection
    {
        return $this->presupuestos;
    }

    public function addPresupuesto(Presupuesto $presupuesto): self
    {
        if (!$this->presupuestos->contains($presupuesto)) {
            $this->presupuestos[] = $presupuesto;
            $presupuesto->setObra($this);
        }

        return $this;
    }

    public function removePresupuesto(Presupuesto $presupuesto): self
    {
        if ($this->presupuestos->removeElement($presupuesto)) {
            // set the owning side to null (unless already changed)
            if ($presupuesto->getObra() === $this) {
                $presupuesto->setObra(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->nombre;
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
            $factura->setObra($this);
        }

        return $this;
    }

    public function removeFactura(Factura $factura): self
    {
        if ($this->facturas->removeElement($factura)) {
            // set the owning side to null (unless already changed)
            if ($factura->getObra() === $this) {
                $factura->setObra(null);
            }
        }

        return $this;
    }
}

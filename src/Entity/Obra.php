<?php

namespace App\Entity;

use App\Repository\ObraRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: ObraRepository::class)]
#[UniqueEntity(
    fields:['nombre'],
    errorPath:'nombre',
    message:'Obra ya existe'
)]
#[UniqueConstraint(
    columns: ['nombre']
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

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: Control::class)]
    private $controls;

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: Actual::class)]
    private $actuals;

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: Flujo::class)]
    private $flujos;

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: ActualHistorico::class)]
    private $actualHistoricos;

    public function __construct()
    {
        $this->presupuestos = new ArrayCollection();
        $this->facturas = new ArrayCollection();
        $this->controls = new ArrayCollection();
        $this->actuals = new ArrayCollection();
        $this->flujos = new ArrayCollection();
        $this->actualHistoricos = new ArrayCollection();
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

    /**
     * @return Collection|Control[]
     */
    public function getControls(): Collection
    {
        return $this->controls;
    }

    public function addControl(Control $control): self
    {
        if (!$this->controls->contains($control)) {
            $this->controls[] = $control;
            $control->setObra($this);
        }

        return $this;
    }

    public function removeControl(Control $control): self
    {
        if ($this->controls->removeElement($control)) {
            // set the owning side to null (unless already changed)
            if ($control->getObra() === $this) {
                $control->setObra(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Actual[]
     */
    public function getActuals(): Collection
    {
        return $this->actuals;
    }

    public function addActual(Actual $actual): self
    {
        if (!$this->actuals->contains($actual)) {
            $this->actuals[] = $actual;
            $actual->setObra($this);
        }

        return $this;
    }

    public function removeActual(Actual $actual): self
    {
        if ($this->actuals->removeElement($actual)) {
            // set the owning side to null (unless already changed)
            if ($actual->getObra() === $this) {
                $actual->setObra(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Flujo[]
     */
    public function getFlujos(): Collection
    {
        return $this->flujos;
    }

    public function addFlujo(Flujo $flujo): self
    {
        if (!$this->flujos->contains($flujo)) {
            $this->flujos[] = $flujo;
            $flujo->setObra($this);
        }

        return $this;
    }

    public function removeFlujo(Flujo $flujo): self
    {
        if ($this->flujos->removeElement($flujo)) {
            // set the owning side to null (unless already changed)
            if ($flujo->getObra() === $this) {
                $flujo->setObra(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ActualHistorico>
     */
    public function getActualHistoricos(): Collection
    {
        return $this->actualHistoricos;
    }

    public function addActualHistorico(ActualHistorico $actualHistorico): self
    {
        if (!$this->actualHistoricos->contains($actualHistorico)) {
            $this->actualHistoricos[] = $actualHistorico;
            $actualHistorico->setObra($this);
        }

        return $this;
    }

    public function removeActualHistorico(ActualHistorico $actualHistorico): self
    {
        if ($this->actualHistoricos->removeElement($actualHistorico)) {
            // set the owning side to null (unless already changed)
            if ($actualHistorico->getObra() === $this) {
                $actualHistorico->setObra(null);
            }
        }

        return $this;
    }
}

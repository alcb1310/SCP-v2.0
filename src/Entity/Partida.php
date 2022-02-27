<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PartidaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Schema\UniqueConstraint;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PartidaRepository::class)]
#[UniqueEntity(
    fields:['codigo'],
    errorPath:'codigo',
    message:'Codigo de partida ya existe'
)]
#[UniqueEntity(
    fields: ['nombre'],
    errorPath:'nombre',
    message: 'Nombre de la partida ya existe'
)]
#[UniqueConstraint(
    columns: ['codigo']
)]
#[UniqueConstraint(
    columns: ['nombre']
)]
#[ApiResource(
    collectionOperations:[
        'get'
    ],
    itemOperations:[
        'get'
    ]
)]
class Partida
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 50, unique:true)]
    #[Groups([
        'presupuesto:read',
        'proveedor:read'
    ])]
    private $codigo;

    #[ORM\Column(type: 'string', length: 255, unique:true)]
    #[Groups([
        'presupuesto:read',
        'proveedor:read'
    ])]
    private $nombre;

    #[ORM\Column(type: 'boolean')]
    private $acumula;

    #[ORM\Column(type: 'integer')]
    private $nivel;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: Presupuesto::class)]
    private $presupuestos;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private $padre;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: DetalleFactura::class)]
    private $detalleFacturas;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: Control::class)]
    private $controls;

    private $total;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: Actual::class)]
    private $actuals;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: Flujo::class)]
    private $flujos;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: ActualHistorico::class)]
    private $actualHistoricos;

    public function setTotal($total)
    {
        $this->total = $total;
    }

    public function getTotal()
    {
        return $this->total;
    }

    public function __construct()
    {
        $this->presupuestos = new ArrayCollection();
        $this->detalleFacturas = new ArrayCollection();
        $this->controls = new ArrayCollection();
        $this->actuals = new ArrayCollection();
        $this->flujos = new ArrayCollection();
        $this->actualHistoricos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodigo(): ?string
    {
        return $this->codigo;
    }

    public function setCodigo(string $codigo): self
    {
        $this->codigo = $codigo;

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

    public function getAcumula(): ?bool
    {
        return $this->acumula;
    }

    public function setAcumula(bool $acumula): self
    {
        $this->acumula = $acumula;

        return $this;
    }

    public function getNivel(): ?int
    {
        return $this->nivel;
    }

    public function setNivel(int $nivel): self
    {
        $this->nivel = $nivel;

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
            $presupuesto->setPartida($this);
        }

        return $this;
    }

    public function removePresupuesto(Presupuesto $presupuesto): self
    {
        if ($this->presupuestos->removeElement($presupuesto)) {
            // set the owning side to null (unless already changed)
            if ($presupuesto->getPartida() === $this) {
                $presupuesto->setPartida(null);
            }
        }

        return $this;
    }

    public function codigo()
    {
        return $this->codigo;
    }

    public function __toString()
    {
        $val = '[' . $this->codigo . '] ' . $this->nombre;
        return $val;
    }

    public function getPadre(): ?self
    {
        return $this->padre;
    }

    public function setPadre(?self $padre): self
    {
        $this->padre = $padre;

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
            $detalleFactura->setPartida($this);
        }

        return $this;
    }

    public function removeDetalleFactura(DetalleFactura $detalleFactura): self
    {
        if ($this->detalleFacturas->removeElement($detalleFactura)) {
            // set the owning side to null (unless already changed)
            if ($detalleFactura->getPartida() === $this) {
                $detalleFactura->setPartida(null);
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
            $control->setPartida($this);
        }

        return $this;
    }

    public function removeControl(Control $control): self
    {
        if ($this->controls->removeElement($control)) {
            // set the owning side to null (unless already changed)
            if ($control->getPartida() === $this) {
                $control->setPartida(null);
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
            $actual->setPartida($this);
        }

        return $this;
    }

    public function removeActual(Actual $actual): self
    {
        if ($this->actuals->removeElement($actual)) {
            // set the owning side to null (unless already changed)
            if ($actual->getPartida() === $this) {
                $actual->setPartida(null);
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
            $flujo->setPartida($this);
        }

        return $this;
    }

    public function removeFlujo(Flujo $flujo): self
    {
        if ($this->flujos->removeElement($flujo)) {
            // set the owning side to null (unless already changed)
            if ($flujo->getPartida() === $this) {
                $flujo->setPartida(null);
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
            $actualHistorico->setPartida($this);
        }

        return $this;
    }

    public function removeActualHistorico(ActualHistorico $actualHistorico): self
    {
        if ($this->actualHistoricos->removeElement($actualHistorico)) {
            // set the owning side to null (unless already changed)
            if ($actualHistorico->getPartida() === $this) {
                $actualHistorico->setPartida(null);
            }
        }

        return $this;
    }
}

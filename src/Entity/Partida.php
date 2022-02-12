<?php

namespace App\Entity;

use App\Repository\PartidaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PartidaRepository::class)]
class Partida
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 50)]
    private $codigo;

    #[ORM\Column(type: 'string', length: 255)]
    private $nombre;

    #[ORM\Column(type: 'boolean')]
    private $acumula;

    #[ORM\Column(type: 'integer')]
    private $nivel;

    #[ORM\OneToMany(mappedBy: 'partida', targetEntity: Presupuesto::class)]
    private $presupuestos;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private $padre;

    public function __construct()
    {
        $this->presupuestos = new ArrayCollection();
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
}

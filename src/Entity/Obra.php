<?php

namespace App\Entity;

use App\Repository\ObraRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ObraRepository::class)]
class Obra
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $nombre;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $casas;

    #[ORM\Column(type: 'boolean')]
    private $activo;

    #[ORM\OneToMany(mappedBy: 'obra', targetEntity: Presupuesto::class)]
    private $presupuestos;

    public function __construct()
    {
        $this->presupuestos = new ArrayCollection();
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
}

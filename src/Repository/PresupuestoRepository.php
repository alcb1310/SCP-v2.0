<?php

namespace App\Repository;

use App\Entity\DetalleFactura;
use App\Entity\Obra;
use App\Entity\Partida;
use App\Entity\Presupuesto;
use Doctrine\DBAL\Exception;
use PhpParser\Node\Stmt\TryCatch;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Presupuesto|null find($id, $lockMode = null, $lockVersion = null)
 * @method Presupuesto|null findOneBy(array $criteria, array $orderBy = null)
 * @method Presupuesto[]    findAll()
 * @method Presupuesto[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PresupuestoRepository extends ServiceEntityRepository
{
    private $em;
    private $registry;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $em)
    {
        parent::__construct($registry, Presupuesto::class);
        $this->em = $em;
        $this->registry = $registry;
    }

    public function getAllOrdered()
    {
        return $this->createQueryBuilder('p')
                ->andWhere('o.activo=1')
                ->andWhere('par.acumula=0')
                ->join('p.obra', 'o')
                ->join('p.partida', 'par')
                ->orderBy('par.codigo')
                ->addSelect('o')
                ->addSelect('par')
                ->getQuery()
                ->execute()
            ;
    }

    public function grabaFactura(DetalleFactura $detalle,Partida $partida, Obra $obra, float $monto, float $cantidad, float $unitario) : bool
    {
        dump ($partida, $obra, $monto, $cantidad);
        $partidaRepository = new PartidaRepository($this->registry);
        $this->em->beginTransaction();
        try {
            $presupuesto = $this->findOneBy([
                'partida' => $partida->getId(),
                'obra' => $obra->getId(),
            ]);
            // dd($presupuesto, $detalle);
            $this->em->persist($detalle);
            $this->em->flush();
            $factura = $detalle->getFactura();
            $factura->setTotal($factura->getTotal()+$monto);
            $this->em->persist($factura);
            $this->em->flush();
            $oldpresupuesto= $presupuesto->getPorgastot();
            $presupuesto->setRendidocant($presupuesto->getRendidocant() + $cantidad);
            $presupuesto->setRendidotot($presupuesto->getRendidotot()+$monto);
            $presupuesto->setPorgascan($presupuesto->getPorgascan()-$cantidad);
            $presupuesto->setPorgascost($unitario);
            $presupuesto->setPorgastot($presupuesto->getPorgascan() * $presupuesto->getPorgascost());
            $presupuesto->setPresactu($presupuesto->getRendidotot()+$presupuesto->getPorgastot());
            $diff =  $presupuesto->getPorgastot() - $oldpresupuesto;
            // dd($presupuesto, $oldpresupuesto, $diff);
            $this->em->persist($presupuesto);
            $this->em->flush();
            $padre = $partida->getPadre();
            while ($padre){
                    $partida = $partidaRepository->findOneBy(['id' => $padre]);
                    $data = $this->findOneBy([
                        'obra' =>$obra,
                        'partida' => $padre
                    ]);
                    if ($data){
                        $data->setRendidotot($data->getRendidotot()+$monto);
                        $data->setPorgastot($data->getPorgastot() + $diff);
                        $data->setPresactu($data->getRendidotot()+$data->getPorgastot());
                        dump($data);
                        $this->em->flush();
                    } else {
                        $this->em->rollback();
                        return false;
                    }
                    dump($data);
                    $padre = $partida->getPadre();
            }
            $this->em->commit();
        } catch (Exception $e) {
            $this->em->rollback();
            return false;
        }

        return true;
    }

    public function actualizaPresupuesto(Partida $partida, Obra $obra, float $oldPresupuesto, Presupuesto $newPresupuesto): bool
    {
        dump($partida, $obra, $oldPresupuesto, $newPresupuesto);
        $partidaRepository = new PartidaRepository($this->registry);
        $this->em->beginTransaction();
        try {
            $diff = $newPresupuesto->getPorgastot() - $oldPresupuesto;
            $this->em->persist($newPresupuesto);
            $this->em->flush();
            $padre = $partida->getPadre();
            while ($padre){
                    $partida = $partidaRepository->findOneBy(['id' => $padre]);
                    $data = $this->findOneBy([
                        'obra' =>$obra,
                        'partida' => $padre
                    ]);
                    if ($data){
                        $data->setTotalini($data->getTotalini()+$diff);
                        $data->setPorgastot($data->getPorgastot() + $diff);
                        $data->setPresactu($data->getRendidotot()+$data->getPorgastot());
                        $this->em->flush();
                    } else {
                        $this->em->rollback();
                        return false;
                    }
                    dump($data);
                    $padre = $partida->getPadre();
            }
            $this->em->flush();
            $this->em->commit();
            return true;
        } catch (Exception $e) {
            $this->em->rollback();
            return false;
        }
    }

    public function borraDetalleFactura (DetalleFactura $detalleFactura): bool
    {
        $partidaRepository = new PartidaRepository($this->registry);
        $facturaRepository = new FacturaRepository($this->registry);
        $this->em->beginTransaction();
        try {
            $obra = $detalleFactura->getFactura()->getObra();
            $factura = $detalleFactura->getFactura();
            $partida = $detalleFactura->getPartida();
            $cantidad = $detalleFactura->getCantidad();
            $total = $detalleFactura->getTotal();
            $this->em->remove($detalleFactura);
            $this->em->flush();
            $factura = $facturaRepository->findOneBy([
                'id' => $factura,
            ]);
            $factura->setTotal($factura->getTotal()-$total);
            $this->em->persist($factura);
            $this->em->flush();
            $presupuesto = $this->findOneBy([
                'obra' => $obra,
                'partida' => $partida,
            ]);
            $presupuesto->setRendidocant($presupuesto->getRendidocant()-$cantidad);
            $presupuesto->setRendidotot($presupuesto->getRendidotot()-$total);
            $presupuesto->setPorgascan($presupuesto->getPorgascan()+$cantidad);
            $presupuesto->setPorgastot($presupuesto->getPorgascan()*$presupuesto->getPorgascost());
            $presupuesto->setPresactu($presupuesto->getRendidotot()+$presupuesto->getPorgastot());
            $this->em->persist($presupuesto);
            $this->em->flush();
            $padre = $presupuesto->getPartida()->getPadre();
            while ($padre){
                    $partida = $partidaRepository->findOneBy(['id' => $padre]);
                    $data = $this->findOneBy([
                        'obra' =>$obra,
                        'partida' => $padre
                    ]);
                    if ($data){
                        $data->setRendidotot($data->getRendidotot() - $total);
                        if ($data->getRendidotot() < 0){
                            $data->setRendidotot(0);
                        }
                        $data->setPorgastot($data->getPorgastot() + $total);
                        $data->setPresactu($data->getRendidotot()+$data->getPorgastot());
                        $this->em->flush();
                    } else {
                        $this->em->rollback();
                        return false;
                    }
                    dump($data);
                    $padre = $partida->getPadre();
            }
            $this->em->commit();
        } catch (Exception $e) {
            $this->em->rollback();
            return false;
        }
        return true;
    }

    // /**
    //  * @return Presupuesto[] Returns an array of Presupuesto objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Presupuesto
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

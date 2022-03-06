<?php

namespace App\Repository;

use App\Entity\DetalleFactura;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DetalleFactura|null find($id, $lockMode = null, $lockVersion = null)
 * @method DetalleFactura|null findOneBy(array $criteria, array $orderBy = null)
 * @method DetalleFactura[]    findAll()
 * @method DetalleFactura[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetalleFacturaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DetalleFactura::class);
    }

    public function getAllSumByPartidaAndMonth($obraCod, $partida, $fecha)
    {
        return $this->createQueryBuilder('d')
                        ->andWhere('p.codigo like  :partida')
                        ->andWhere('o.nombre=:obra')
                        ->andWhere('year(f.fecha) = year(:fecha)')
                        ->andWhere('month(f.fecha) = month(:fecha)')
                        ->join('d.partida', 'p')
                        ->join('d.factura', 'f')
                        ->join('f.obra', 'o')
                        ->setParameter('partida', $partida.'%')
                        ->setParameter('obra', $obraCod)
                        ->setParameter('fecha', $fecha)
                        ->select('p.codigo, p.nombre, sum(d.total) total')
                        ->addGroupBy('p.codigo')
                        ->addGroupBy('p.nombre')
                        ->getQuery()
                        ->getResult()
                    ;
    }

    // /**
    //  * @return DetalleFactura[] Returns an array of DetalleFactura objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DetalleFactura
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

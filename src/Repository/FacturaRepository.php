<?php

namespace App\Repository;

use App\Entity\Obra;
use App\Entity\Factura;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Factura|null find($id, $lockMode = null, $lockVersion = null)
 * @method Factura|null findOneBy(array $criteria, array $orderBy = null)
 * @method Factura[]    findAll()
 * @method Factura[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FacturaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Factura::class);
    }

    public function getAllOrdered()
    {
        return $this->createQueryBuilder('f')
                ->andWhere('o.activo = 1')
                ->join('f.obra', 'o')
                ->join('f.proveedor', 'p')
                ->addSelect('f')
                ->addSelect('p')
                ->orderBy('o.nombre', 'ASC')
                ->orderBy('f.fecha', 'DESC')
                ->orderBy('p.nombre', 'ASC')
                ->orderBy('f.numero', 'ASC')
                ->getQuery()
                ->execute()
                ;
    }

    public function getAllInMonth(Obra $obra, DateTime $date)
    {
        return $this->createQueryBuilder('f')
                ->andWhere('f.obra = :obra')
                ->andWhere('month(f.fecha) = :month')
                ->andWhere('year(f.fecha) = :year')
                ->setParameter('obra', $obra)
                ->setParameter('month', $date->format('m'))
                ->setParameter('year', $date->format('Y'))
                ->join('f.proveedor', 'p')
                ->addOrderBy('f.fecha', 'ASC')
                ->addOrderBy('p.nombre', 'ASC')
                ->addOrderBy('f.numero')
                ->addSelect('p')
                ->getQuery()
                ->execute()
                ;
    }

    // /**
    //  * @return Factura[] Returns an array of Factura objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Factura
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

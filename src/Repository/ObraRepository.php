<?php

namespace App\Repository;

use App\Entity\Obra;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Obra|null find($id, $lockMode = null, $lockVersion = null)
 * @method Obra|null findOneBy(array $criteria, array $orderBy = null)
 * @method Obra[]    findAll()
 * @method Obra[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ObraRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Obra::class);
    }

    public function getAllActive()
    {
        return $this->createQueryBuilder('o')
                ->andWhere('o.activo = 1')
                ->addOrderBy('o.nombre', 'ASC')
                ->getQuery()
                ->getResult()
            ;
    }

    public function getSumFacturaTotalByYearAndMonth(Obra $obra)
    {
        return $this->createQueryBuilder('o')
                ->andWhere('o.id = :obra')
                ->join('o.facturas', 'f')
                ->select('year(f.fecha) year, month(f.fecha) month, sum(f.total) total')
                ->setParameter('obra', $obra->getId())
                ->addGroupBy('year')
                ->addGroupBy('month')
                ->getQuery()
                ->getResult()
                ;
    }

    // /**
    //  * @return Obra[] Returns an array of Obra objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Obra
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

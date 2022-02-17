<?php

namespace App\Repository;

use App\Entity\Flujo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Flujo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Flujo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Flujo[]    findAll()
 * @method Flujo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FlujoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Flujo::class);
    }

    // /**
    //  * @return Flujo[] Returns an array of Flujo objects
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
    public function findOneBySomeField($value): ?Flujo
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

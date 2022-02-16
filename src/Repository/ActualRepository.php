<?php

namespace App\Repository;

use App\Entity\Actual;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Actual|null find($id, $lockMode = null, $lockVersion = null)
 * @method Actual|null findOneBy(array $criteria, array $orderBy = null)
 * @method Actual[]    findAll()
 * @method Actual[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActualRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Actual::class);
    }

    // /**
    //  * @return Actual[] Returns an array of Actual objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Actual
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

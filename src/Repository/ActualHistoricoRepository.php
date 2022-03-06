<?php

namespace App\Repository;

use App\Entity\ActualHistorico;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ActualHistorico|null find($id, $lockMode = null, $lockVersion = null)
 * @method ActualHistorico|null findOneBy(array $criteria, array $orderBy = null)
 * @method ActualHistorico[]    findAll()
 * @method ActualHistorico[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActualHistoricoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ActualHistorico::class);
    }

    // /**
    //  * @return ActualHistorico[] Returns an array of ActualHistorico objects
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
    public function findOneBySomeField($value): ?ActualHistorico
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

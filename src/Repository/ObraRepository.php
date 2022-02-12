<?php

namespace App\Repository;

use App\Entity\Obra;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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

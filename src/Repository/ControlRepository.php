<?php

namespace App\Repository;

use App\Entity\Control;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Control|null find($id, $lockMode = null, $lockVersion = null)
 * @method Control|null findOneBy(array $criteria, array $orderBy = null)
 * @method Control[]    findAll()
 * @method Control[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ControlRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Control::class);
    }

    public function getByObraAndFecha ($obra, $fecha)
    {
        return $this->createQueryBuilder('c')
                    ->andWhere('c.obra = :obra')
                    ->andWhere('year(c.fecha) = year(:fecha)')
                    ->andWhere('month(c.fecha) = month(:fecha)')
                    ->setParameter('fecha', $fecha)
                    ->setParameter('obra', $obra)
                    ->getQuery()
                    ->getResult();
    }

    public function getByNivel($obra, $nivel, $fecha)
    {
        return $this->createQueryBuilder('c')
                    ->andWhere('c.obra = :obra')
                    ->andWhere('year(c.fecha) = year(:fecha)')
                    ->andWhere('month(c.fecha) = month(:fecha)')
                    ->andWhere('p.nivel<=:nivel')
                    ->join('c.partida', 'p')
                    ->setParameter('fecha', $fecha)
                    ->setParameter('obra', $obra)
                    ->setParameter('nivel', $nivel)
                    ->addSelect('p')
                    ->getQuery()
                    ->getResult()
                    ;
    }

    // /**
    //  * @return Control[] Returns an array of Control objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Control
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

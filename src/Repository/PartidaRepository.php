<?php

namespace App\Repository;

use App\Entity\Obra;
use App\Entity\Partida;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Partida|null find($id, $lockMode = null, $lockVersion = null)
 * @method Partida|null findOneBy(array $criteria, array $orderBy = null)
 * @method Partida[]    findAll()
 * @method Partida[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartidaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Partida::class);
    }

    /**
     * @return Partida[] Returns an array of Partida objects
     */
    public function getAllOrderedByCodigo()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.codigo', 'ASC')
            // ->getQuery()
            // ->getResult()
            ;
    }

    /**
     * @return Partida[] Returns an array of Partida objects
     */
    public function findAllParents(){
        return $this->createQueryBuilder('p')
            ->andWhere('p.acumula=1')
            ->getQuery()
            ->execute();
    }

    /**
     * @return Partida[] Returns an array of Partida objects
     */
    public function findAllChilds($obra){
        // $query = $this->createQueryBuilder('p')
        //     ->andWhere('p.acumula=0')
        //     ->andWhere('p.obra=:obra')
        //     ->setParameter('f.obra', $obra)
        //     ->join('pres.factura', 'f')
        //     ->join('p.presupuestos', 'pres');

        // dd($query->getQuery());
        return $this->createQueryBuilder('p')
            ->andWhere('p.acumula=0')
            ->andWhere('pres.obra=:obra')
            ->setParameter('obra', $obra)
            ->join('p.presupuestos', 'pres')
            ->getQuery()
            ->execute();
    }

    public function getAllNiveles()
    {
        return $this->createQueryBuilder('p')
                    ->select('p.nivel')
                    ->distinct(true)
                    ->getQuery()
                    ->execute()
                ;
    }
    

    // /**
    //  * @return Partida[] Returns an array of Partida objects
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
    public function findOneBySomeField($value): ?Partida
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

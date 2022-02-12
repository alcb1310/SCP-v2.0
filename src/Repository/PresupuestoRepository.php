<?php

namespace App\Repository;

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

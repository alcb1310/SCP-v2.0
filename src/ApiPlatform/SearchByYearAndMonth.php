<?php
namespace App\ApiPlatform;

use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\AbstractFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;

class SearchByYearAndMonth extends AbstractFilter
{
     protected function filterProperty(string $property, $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, string $operationName = null)
     {
          if ($property !== 'fecha'){
               return;
          }

          $alias = $queryBuilder->getRootAliases()[0];
          $queryBuilder->andWhere(sprintf('year(%s.fecha) = year(:fecha)', $alias))
               ->andWhere(sprintf('month(%s.fecha) = month(:fecha)', $alias))
               ->setParameter('fecha', $value);
     }

     public function getDescription(string $resourceClass): array
     {
          return [
               'search' => [
                    'property' => 'fecha',
                    'type' => 'date',
                    'required' => false,
                    'openapi' => [
                         'description' => 'Search by month and year',
                    ],
               ],

               'nivel' => [
                    'property' => 'nivel',
                    'type' => 'integer',
                    'required' => false,
                    'openapi' => [
                         'description' => 'Search by month and year',
                    ],
               ]
          ];
     }
}
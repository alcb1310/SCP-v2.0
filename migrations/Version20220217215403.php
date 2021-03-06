<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220217215403 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actual DROP fecha');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_227D9A243C2672C8F15A1987 ON actual (obra_id, partida_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_EDDB2C4B3C2672C8F15A19871A8B7D9 ON control (obra_id, partida_id, fecha)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B1354EA1F04F795FF15A1987 ON detalle_factura (factura_id, partida_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F9EBA0093C2672C8CB305D73F55AE19E ON factura (obra_id, proveedor_id, numero)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1B6368D33C2672C8F15A1987 ON presupuesto (obra_id, partida_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX UNIQ_227D9A243C2672C8F15A1987 ON actual');
        $this->addSql('ALTER TABLE actual ADD fecha DATE NOT NULL');
        $this->addSql('DROP INDEX UNIQ_EDDB2C4B3C2672C8F15A19871A8B7D9 ON control');
        $this->addSql('DROP INDEX UNIQ_B1354EA1F04F795FF15A1987 ON detalle_factura');
        $this->addSql('DROP INDEX UNIQ_F9EBA0093C2672C8CB305D73F55AE19E ON factura');
        $this->addSql('DROP INDEX UNIQ_1B6368D33C2672C8F15A1987 ON presupuesto');
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220212161143 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE partida ADD padre_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE partida ADD CONSTRAINT FK_A9C1580C613CEC58 FOREIGN KEY (padre_id) REFERENCES partida (id)');
        $this->addSql('CREATE INDEX IDX_A9C1580C613CEC58 ON partida (padre_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE obra CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE partida DROP FOREIGN KEY FK_A9C1580C613CEC58');
        $this->addSql('DROP INDEX IDX_A9C1580C613CEC58 ON partida');
        $this->addSql('ALTER TABLE partida DROP padre_id, CHANGE codigo codigo VARCHAR(50) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE proveedor CHANGE ruc ruc VARCHAR(20) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE contacto contacto VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE telefono telefono VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220215222828 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE control (id INT AUTO_INCREMENT NOT NULL, obra_id INT NOT NULL, partida_id INT NOT NULL, fecha DATE NOT NULL, cantini DOUBLE PRECISION DEFAULT NULL, costoini DOUBLE PRECISION DEFAULT NULL, totalini DOUBLE PRECISION DEFAULT NULL, rendidocant DOUBLE PRECISION DEFAULT NULL, rendidotot DOUBLE PRECISION DEFAULT NULL, porgascan DOUBLE PRECISION DEFAULT NULL, porgascost DOUBLE PRECISION DEFAULT NULL, porgastot DOUBLE PRECISION DEFAULT NULL, presactu DOUBLE PRECISION DEFAULT NULL, INDEX IDX_EDDB2C4B3C2672C8 (obra_id), INDEX IDX_EDDB2C4BF15A1987 (partida_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE control ADD CONSTRAINT FK_EDDB2C4B3C2672C8 FOREIGN KEY (obra_id) REFERENCES obra (id)');
        $this->addSql('ALTER TABLE control ADD CONSTRAINT FK_EDDB2C4BF15A1987 FOREIGN KEY (partida_id) REFERENCES partida (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE control');
        $this->addSql('ALTER TABLE factura CHANGE numero numero VARCHAR(100) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE obra CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE partida CHANGE codigo codigo VARCHAR(50) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE proveedor CHANGE ruc ruc VARCHAR(20) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE contacto contacto VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE telefono telefono VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE user CHANGE username username VARCHAR(180) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE password password VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nombre nombre VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}

# SISTEMA DE CONTROL PRESUPUESTARIO

## PROMOTORA INCOGRES

La presente aplicaci&oacute;n es el desarrollo de un sistema para el manejo del presupuesto de obra dise&ntilde;ado para Promotora Incogres Cia. Ltda.

Esta es la segunda versi&oacute;n del mencionado sistema en el que se migra el desarrollo de PHP puro a utilizar un framework como lo es Symfony.

En cuanto a funcionalidad no existen cambios a la versi&oacute;n anterior, aunque hay cambios en funcionalidades como desplegar la informaci&oacute;n de en pantalla para cada actividad como Obra, Partida, Presupuesto, Factura, Proveedor, etc. Con esto se permite editar de una mejor manera los campos editables.

Se crean "Entidades" de symfony para cada tabla de la base de datos, pero esto forza a migrar la base de datos de producci&oacute;n. Para esto se creo el archivo python/migration.py cuyo &uacute;nico objetivo es el de migrar datos de la base de datos de producci&oacute;n a la nueva base de datos creada.

Como parte de la funcionalidad de Symfony para poder pasar a producci&oacute;n el sistema, se requiere hacer una serie de pasos, los cuales se describen a continuaci&oacute;n;

1. Hay que crear la carpeta con la estructura base de Symfony. Para esto se utiliza el comando

```
symfony new <project>
```

2. Dentro de la carpeta del projecto, se ejecuta el siguiente comando:

```
git clone <project>
```

con esto se tiene el sistema en el servidor, luego se ejecuta el siguiente comando:

```
git pull origin main
```

3. solo para asegurarse de tener la ultima versi&oacute; 3. Symfony se basa en paquetes, los cuales no se graban en git, por lo que hay que obtenerlos manualmente ejecutar los siguientes comandos:

```
composer require  annotations
composer require template
composer require profiler --dev
composer require symfony/asset
composer require maker --dev
composer require orm
composer require form-validator
composer require symfony/apache-pack
composer require beberlei/doctrineextensions
composer require security
composer require babdev/pagerfanta-bundle
composer require pagerfanta/doctrine-orm-adapter
composer require pagerfanta/twig
```

4. Una vez ejecutado esto hay que tener el archivo de configuracion .env de manera local, para esto se ejecuta:

```
composer dump-env prod
```

5. Editamos la configuracion del servidor de MySQL con el usuario, contrase&ntilde;a y nombre de base de datos (si no se utiliza scp como nombre, habria que cambiar tambien el archivo `python/migration.py`)
6. Para crear la base de datos utilizamos el siguiente comando:

```
php bin/console doctrine:database:create
```

7. Para crear las tablas se debe ejecutar el siguiente comando:

```
php bin/console doctrine:migrations:migrate
```

```
composer require symfony/requirements-checker
composer dump-env prod
composer install --no-dev --optimize-autoloader
APP_ENV=prod APP_DEBUG=0 php bin/console cache:clear
yarn install
yarn build
```

actualizar httpd.conf
reiniciar apache

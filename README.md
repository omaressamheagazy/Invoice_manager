
# Invoice Manager App

## Container structures
```bash
├── api
├── db
└── pgadmin
```

## Installation

Adjust your .env variables.

```bash

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=postgres

SANCTUM_STATEFUL_DOMAINS=localhost:5173
SPA_URL=http://localhost:5173
SESSION_DOMAIN=localhost

```
To run the containers, please use the provided Makefile. Run make to see all supported commands.

```bash
    Usage:
      make <target>

    Targets:
      help        Print help.
      ps          Show containers.
      build       Build all containers for DEV
      build-prod  Build all containers for PROD
      start       Start all containers
      fresh       Destroy & recreate all uing dev containers.
      fresh-prod  Destroy & recreate all using prod containers.
      stop        Stop all containers
      restart     Restart all containers
      destroy     Destroy all containers
      ssh         SSH into PHP container
      install     Run composer install
      migrate     Run migration files
      migrate-fresh  Clear database and run all migrations
      tests       Run all tests
      tests-html  Run tests and generate coverage. Report found in reports/index.html

Default PHP port is configured to 98000. Connect via `http:/localhost:9000` or `http://127.0.0.1:9000`

Default DB port is 5432.
```
#### Development

```bash
make fresh 
```
#### Production

```bash
fresh-prod 
```
## Authors

- [@omaressamheagazy](https://github.com/omaressamheagazy)


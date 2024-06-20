
# Invoice Manager App

# Technologies used

* Laravel
* Vue.js
* postgresql
* Tailwind CSS
* Docker
  
## Stage 2

Currently, The following tasks have implemented:

* User autentication (Login and, registration)
* Community creation 
* Sub-community creation 
* File uploading 
* User Request 
* Adding users to communities 

Next Stage:

* Permission system for commmunities, files, and users
* Searching functionality for the communiteis

### Screenshots

<table>
  <tr>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/a8836cab-638b-401e-8394-fd173df32931" width="400"></td>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/9ec62b41-725e-4437-bb83-322a2ac40588" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/a4de24f2-7be0-4823-bd05-f70eb2915007" width="400"></td>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/07dbd360-0d01-4937-9f80-a9973231179c" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/4f47f300-87d4-4738-bb67-237b3d5d896a" width="400"></td>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/e0fe3709-9c2c-4947-a270-a74c6be1541c" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/omaressamheagazy/Invoice_manager/assets/68665060/b4aed07d-c30a-4d11-95e9-d86e836d5375" width="400"></td>
    <td></td>
  </tr>
</table>





### Container structures
```bash
├── api
├── db
└── pgadmin

Nginx is also installed in the Dockerfile, serving as the web server for the API
```
## Installation
### backend
Adjust your .env variables in .env.example, and rename the file to .env

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

To run all containers for local development, run `make fresh`. Otherwise `make fresh-prod` for prod builds.

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
### frontend

```bash
cd frontend
```
```bash
npm install 
```

```bash
npm run dev
```

## Author

- [@omaressamheagazy](https://github.com/omaressamheagazy)



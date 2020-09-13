# Dhamma Dhara App

## Introduction
This application will be used by the Vipassana Medidataion Center (Dhamma Dhara) to organize it's maintenance-related workflow. See the [problem definition and requirements](./problem_definition_and_requirements.md) for the problem it attempts to solve. It may be extensible in the future to be used by other teams, both within the center and across other centers.

## Technologies used
- Node.js / Express for the backend and server
- Postgres Database
- React for the frontend
  - Redux to manage frontend state
  - D3 to manage SVG manipulation
  - Bootstrap for styling
- Graphql to manage the interaction between the backend and the frontend
  - Apollo to manage interaction between React and Graphql
- AWS S3 for thumbnail and photo images that are uploaded
- Jest and Puppeteer for unit, integration, and end to end testing

## Packages used
- [react-icons](https://react-icons.github.io/react-icons/) for icons on the frontend
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) for making and executing migrations to the postgres database

## Running Migrations Locally

Configure your postgres database in your prisma .env file. Run migrations against the same file. 

DATABASE_URL=postgres://[username:password]@localhost:5432/[databasename] yarn run migrate up

Creating a migration: [DB INFO] yarn run migrate create this is my migration name

## Introspecting with Prisma
npx prisma introspect
NOTE: To fix a failing schema, it might be necessary to delete node modules and re-install them. Prisma stores some information about the schema in the node modules.

## To connect to heroku, if you have access

`heroku run bash`

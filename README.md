# NodeJS (Express) + GraphQL (Apollo Server)

## Language

- Typescript

## Authentication

- jwt

## Database

- MongoDB (mongoose)

## Dev Tools

- Nodemon
- Prettier
- EsLint
- Husky

## Folder Structure

    .
    └── src
    |    ├── directives          # Custom GrapqhQL directives http://spec.graphql.org/draft/#sec-Type-System.Directives
    |    ├── models              # Mongo models
    |    ├── modules             # GraphQL module (include schema and resolvers)
    |    ├── scalars             # Custom GraphQL types http://spec.graphql.org/draft/#sec-Scalars
    |    └── utils               # Shared functions acrross the project
    └── tests

## Scripts

### `yarn dev`

Runs the app in development mode.

### `yarn lint`

Launches the lint runner in the interactive watch mode.<br />
Learn more about [ESLint](https://eslint.org/docs/user-guide/getting-started).

### `yarn format`

Launches the format runner in the interactive watch mode.<br />
Learn more about [Prettier](https://prettier.io/).

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

# Prisma Notes

## Prisma Migration

- From doc

```shell
mkdir -p prisma/migrations/init
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql
npx prisma migrate resolve --applied init
```

- From project

```shell
mkdir -p prisma/migrations/salaries
pnpm exec prisma migrate diff --from-empty --to-schema-d
pnpm exec prisma migrate resolve --applied salaries
pnpm exec prisma migrate reset
pnpm exec prisma migrate dev --name salaries
```

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

```json
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["postgresqlExtensions"]
}

datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  extensions = [uuidOssp(map: "uuid-ossp")]
}
```

- Delete the migration record from the database

```shell
pnpm exec prisma migrate reset
pnpm exec prisma migrate dev --name salaries
```

##  Prisma client generate

```shell
pnpm exec prisma generate
```

import { DataSource } from "typeorm";
const devMigrationsSource = [
  "src/migrations/*.ts",
  "src/modules/**/migrations/*.ts",
];
const prodMigrationsSource = [
  "dist/migrations/*.js",
  "dist/modules/**/migrations/*.js",
];
const devEntitiesSource = ["src/modules/**/entities/*.ts"];
const prodEntitiesSource = ["dist/modules/**/entities/*.js"];

const isDev = process.env.NODE_ENV === "dev";

const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "stellar-app",
  synchronize: false,
  logging: true,
  entities: isDev ? devEntitiesSource : prodEntitiesSource,
  migrations: isDev ? devMigrationsSource : prodMigrationsSource,
  migrationsRun: true,
});

export default db;

import migrationRunner from 'node-pg-migrate'
import { join } from 'node:path';

export default async function migrations(request, response) {
  const defaultMigrationsOptions = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations"
  };

  if (request.method === 'GET') {
    const pendingMigrations = await migrationRunner(defaultMigrationsOptions);
    response.status(200).json(pendingMigrations);
  }  
  if (request.method === 'POST') {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationsOptions,
      dryRun: false 
    });

    if (migrations.length > 0) {
      response.status(201).json(migratedMigrations);
    }
    response.status(200).json(migratedMigrations);
  }

  response.status(405).end();
}


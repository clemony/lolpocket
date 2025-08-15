import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/db/schemas/index.ts',
  out: './server/db/migrations',
})
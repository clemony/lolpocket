import { mkdir, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { loadEnvFile } from "node:process"

const configPath = resolve(".wrangler/match-analytics/wrangler.jsonc")
const compatibilityDate = "2026-06-29"
const defaultCron = "*/5 * * * *"
const disabledCronValues = new Set([
  "0",
  "disable",
  "disabled",
  "false",
  "none",
  "off",
])

try {
  loadEnvFile(".env")
} catch (err) {
  if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
    throw err
  }
}

function requiredEnv(name: string) {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(
      `${name} is required to build the match analytics Worker config`
    )
  }

  return value
}

function optionalEnv(name: string) {
  const value = process.env[name]?.trim()
  return value || undefined
}

function cronTriggers() {
  const cron = optionalEnv("MATCH_ANALYTICS_GATHER_CRON")
  if (!cron) return [defaultCron]

  return disabledCronValues.has(cron.toLocaleLowerCase()) ? [] : [cron]
}

function d1Binding(options: {
  binding: string
  defaultName: string
  idEnv: string
  nameEnv: string
  previewIdEnv: string
}) {
  const previewDatabaseId = optionalEnv(options.previewIdEnv)

  return {
    binding: options.binding,
    database_name: optionalEnv(options.nameEnv) ?? options.defaultName,
    database_id: requiredEnv(options.idEnv),
    ...(previewDatabaseId ? { preview_database_id: previewDatabaseId } : {}),
  }
}

function workerVars() {
  const seedLimit = optionalEnv("MATCH_ANALYTICS_SEED_LIMIT")
  const matchCount = optionalEnv("MATCH_ANALYTICS_MATCH_COUNT")

  return {
    ...(seedLimit ? { MATCH_ANALYTICS_SEED_LIMIT: seedLimit } : {}),
    ...(matchCount ? { MATCH_ANALYTICS_MATCH_COUNT: matchCount } : {}),
  }
}

async function main() {
  const vars = workerVars()
  const config = {
    $schema: "../../node_modules/wrangler/config-schema.json",
    name:
      optionalEnv("MATCH_ANALYTICS_WORKER_NAME") ??
      "lolpocket-match-analytics-gather",
    ...(optionalEnv("CLOUDFLARE_ACCOUNT_ID")
      ? { account_id: optionalEnv("CLOUDFLARE_ACCOUNT_ID") }
      : {}),
    main: "../../workers/match-analytics-gather/index.ts",
    compatibility_date: compatibilityDate,
    compatibility_flags: ["nodejs_compat"],
    observability: {
      enabled: true,
    },
    triggers: {
      crons: cronTriggers(),
    },
    d1_databases: [
      d1Binding({
        binding: "SUMMONER_CACHE_DB",
        defaultName: "lolpocket-summoner-cache",
        idEnv: "SUMMONER_CACHE_D1_DATABASE_ID",
        nameEnv: "SUMMONER_CACHE_D1_DATABASE_NAME",
        previewIdEnv: "SUMMONER_CACHE_D1_PREVIEW_DATABASE_ID",
      }),
      d1Binding({
        binding: "MATCH_ANALYTICS_DB",
        defaultName: "lolpocket-match-analytics",
        idEnv: "MATCH_ANALYTICS_D1_DATABASE_ID",
        nameEnv: "MATCH_ANALYTICS_D1_DATABASE_NAME",
        previewIdEnv: "MATCH_ANALYTICS_D1_PREVIEW_DATABASE_ID",
      }),
    ],
    ...(Object.keys(vars).length ? { vars } : {}),
  }

  await mkdir(dirname(configPath), { recursive: true })
  await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`)
  console.log(`Wrote ${configPath}`)
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})

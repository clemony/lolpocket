// scripts/update/run-update.ts
import { execSync } from 'node:child_process'

export async function runesUpdate() {
  const pipeline: [string, string][] = [
    ['fetch:runes', './fetch-runes.ts'],
    ['generate:runes', './generate-runes.ts'],
    ['generate:path-index', './generate-path-index.ts'],
    ['generate:rune-index', './generate-rune-index.ts'],
    ['generate:rune-index', './generate-rune-lookup.ts'],
  ]

  for (const [label, modulePath] of pipeline) {
    try {
      console.log(`\n⏳ Running: ${label}`)
      await import(modulePath)
      console.log(`✅ Finished: ${label}`)
    }
    catch (err) {
      console.error(`❌ Failed: ${label}`, err)
      throw err
    }
  }
}

// scripts/patch/run-update.ts
import { execSync } from "node:child_process"

export async function itemUpdate() {
  const pipeline: [string, string][] = [
    ["fetch:items", "./fetch.ts"],
    ["build:items", "./build/items.ts"],
    ["build:item-filter", "./build/filter.ts"],
    ["build:item-stats", "./build/stats.ts"],
  ]

  for (const [label, modulePath] of pipeline) {
    try {
      console.log(`\n⏳ Running: ${label}`)
      await import(modulePath)
      console.log(`✅ Finished: ${label}`)
    } catch (err) {
      console.error(`❌ Failed: ${label}`, err)
      throw err
    }
  }
}

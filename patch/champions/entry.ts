/**
 * @fileoverview
 * @description This script is for generating a TS file per champion with static data.
 * It is designed to be run from the root of the project, and will generate the files
 * in the same directory.
 *
 * @example
 * npm run generate:champions
 *
 * @flags
 * --reset    Clear the savepoint and start from scratch.
 * --list     Don't run the scripts, just show the pipeline order and current savepoint.
 * --continue Errors will not abort the script sequence.
 */

import fs from "node:fs"
import { resolve } from "node:path"
import process from "node:process"

const SAVE_FILE = resolve("./patch/champions/.savepoint.json")
const args = process.argv.slice(2)
const RESET = args.includes("--reset")
const LIST = args.includes("--list")
const CONTINUE_ON_ERROR = args.includes("--continue")
const FRESH = args.includes("--fresh")

interface Results {
  failed: string[]
  skipped: string[]
  success: string[]
}

function getSavepoint(): string[] {
  if (fs.existsSync(SAVE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(SAVE_FILE, "utf-8"))
    } catch {
      return []
    }
  }
  return []
}

function setSavepoint(completed: string[]) {
  fs.writeFileSync(SAVE_FILE, JSON.stringify(completed, null, 2))
}

function clearSavepoint() {
  if (fs.existsSync(SAVE_FILE)) fs.unlinkSync(SAVE_FILE)
}

async function run(
  label: string,
  modulePath: string,
  completed: string[],
  results: Results
) {
  if (completed.includes(label)) {
    console.log(`⏭️  Skipping: ${label} (already completed)`)
    results.skipped.push(label)
    return
  }

  try {
    console.log(`\n⏳ Running: ${label}`)
    await import(resolve(modulePath))
    console.log(`✅ Finished: ${label}`)

    completed.push(label)
    setSavepoint(completed)
    results.success.push(label)
  } catch (err) {
    console.error(`❌ Failed: ${label}`, err)
    results.failed.push(label)
    if (!CONTINUE_ON_ERROR) throw err
  }
}

export async function championUpdate() {
  const pipeline: [string, string][] = [
    ["fetch:champions", "./patch/champions/fetch/champions.ts"],
    ["fetch:icons", "./patch/champions/fetch/icons.ts"],
    ["generate:champions", "./patch/champions/build/champions.ts"],
    ["generate:champion-index", "./patch/champions/build/index.ts"],
    ["generate:champions-lite", "./patch/champions/build/lite.ts"],
    ["generate:champions-titles", "./patch/champions/build/titles.ts"],
    // ["generate:champion-skins", "./patch/champions/build/skins.ts"],
    ["generate:champion-filter", "./patch/champions/build/filter.ts"],
    // ['generate:max-stats', './patch/generate-max-stats.ts'],
  ]

  if (LIST) {
    console.log("📋 Pipeline order:")
    pipeline.forEach(([label]) => console.log(` - ${label}`))
    const completed = getSavepoint()
    console.log(
      completed.length
        ? `\n💾 Current savepoint: ${completed.join(", ")}`
        : "\n💾 No savepoint found."
    )
    return
  }

  if (RESET) {
    console.log("🔄 Reset flag detected — clearing savepoint.")
    clearSavepoint()
  }

  const completed = FRESH ? [] : getSavepoint()
  const results: Results = { failed: [], skipped: [], success: [] }

  try {
    for (const [label, modulePath] of pipeline) {
      await run(label, modulePath, completed, results)
    }

    clearSavepoint()
    console.log("\n🎉 All scripts completed successfully!")
  } catch {
    console.error("\n🔥 Script sequence aborted.")
  } finally {
    console.log("\n📊 Summary:")
    if (results.success.length)
      console.log(` ✅ Success: ${results.success.join(", ")}`)
    if (results.skipped.length)
      console.log(` ⏭️  Skipped: ${results.skipped.join(", ")}`)
    if (results.failed.length)
      console.log(` ❌ Failed: ${results.failed.join(", ")}`)
  }
}

championUpdate()

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

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
function resolvePath(filePath: string) {
  return path.resolve(filePath)
}

const SAVE_FILE = resolvePath('./.savepoint.json')
const args = process.argv.slice(2)
const RESET = args.includes('--reset')
const LIST = args.includes('--list')
const CONTINUE_ON_ERROR = args.includes('--continue')
const FRESH = args.includes('--fresh')

interface Results {
  success: string[]
  skipped: string[]
  failed: string[]
}

function getSavepoint(): string[] {
  if (fs.existsSync(SAVE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(SAVE_FILE, 'utf-8'))
    }
    catch {
      return []
    }
  }
  return []
}

function setSavepoint(completed: string[]) {
  fs.writeFileSync(SAVE_FILE, JSON.stringify(completed, null, 2))
}

function clearSavepoint() {
  if (fs.existsSync(SAVE_FILE))
    fs.unlinkSync(SAVE_FILE)
}

async function run(label: string, modulePath: string, completed: string[], results: Results) {
  if (completed.includes(label)) {
    console.log(`⏭️  Skipping: ${label} (already completed)`)
    results.skipped.push(label)
    return
  }

  try {
    console.log(`\n⏳ Running: ${label}`)
    await import(resolvePath(modulePath))
    console.log(`✅ Finished: ${label}`)

    completed.push(label)
    setSavepoint(completed)
    results.success.push(label)
  }
  catch (err) {
    console.error(`❌ Failed: ${label}`, err)
    results.failed.push(label)
    if (!CONTINUE_ON_ERROR)
      throw err
  }
}

export async function championUpdate() {
  const pipeline: [string, string][] = [
    ['fetch:champions', './fetch-champions.ts'],
    ['generate:champions', './generate-champions.ts'],
    ['generate:champion-index', './generate-champion-index.ts'],
    ['generate:champions-lite', './generate-champions-lite.ts'],
    ['generate:champions-titles', './generate-champion-title-index.ts'],
    ['generate:champion-skins', './generate-champion-skins.ts'],
    ['generate:champion-filter', './generate-champion-filter.ts'],
    // ['generate:max-stats', './generate-max-stats.ts'],
  ]

  if (LIST) {
    console.log('📋 Pipeline order:')
    pipeline.forEach(([label]) => console.log(` - ${label}`))
    const completed = getSavepoint()
    console.log(completed.length ? `\n💾 Current savepoint: ${completed.join(', ')}` : '\n💾 No savepoint found.')
    return
  }

  if (RESET) {
    console.log('🔄 Reset flag detected — clearing savepoint.')
    clearSavepoint()
  }

  const completed = FRESH ? [] : getSavepoint()
  const results: Results = { success: [], skipped: [], failed: [] }

  try {
    for (const [label, modulePath] of pipeline) {
      await run(label, modulePath, completed, results)
    }

    clearSavepoint()
    console.log('\n🎉 All scripts completed successfully!')
  }
  catch {
    console.error('\n🔥 Script sequence aborted.')
  }
  finally {
    console.log('\n📊 Summary:')
    if (results.success.length)
      console.log(` ✅ Success: ${results.success.join(', ')}`)
    if (results.skipped.length)
      console.log(` ⏭️  Skipped: ${results.skipped.join(', ')}`)
    if (results.failed.length)
      console.log(` ❌ Failed: ${results.failed.join(', ')}`)
  }
}

championUpdate()
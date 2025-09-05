import { execSync } from 'node:child_process'

import { championUpdate } from './champions/entry.ts'
import { runesUpdate } from './runes/runes-update.ts'

async function main() {
  try {
    // --- Patch ---
    execSync('tsx scripts/fetch/fetch-patch.ts', { stdio: 'inherit' })

    // --- Items ---
    execSync('tsx scripts/fetch/fetch-items.ts', { stdio: 'inherit' })
    execSync('tsx scripts/generate/generate-items.ts', { stdio: 'inherit' })
    execSync('tsx scripts/generate/generate-item-filter.ts', { stdio: 'inherit' })
    execSync('tsx scripts/generate/generate-item-stats.ts', { stdio: 'inherit' })

    // --- Champions ---
    await championUpdate()

    // --- Runes ---
    await runesUpdate()

    // --- Spells (optional) ---
    // execSync('tsx scripts/fetch/fetch-spells.ts', { stdio: 'inherit' })

    console.log('\n🎉 All scripts completed successfully!')
  }
  catch (err) {
    console.error('\n🔥 Update pipeline aborted.', err)
  }
}

main()
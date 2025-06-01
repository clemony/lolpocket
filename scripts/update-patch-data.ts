import { execSync } from 'node:child_process'

function run(label: string, cmd: string) {
  try {
    console.log(`\n⏳ Running: ${label}`)
    execSync(cmd, { stdio: 'inherit' })
    console.log(`✅ Finished: ${label}`)
  }
  catch (err) {
    console.error(`❌ Failed: ${label}`)
    throw err // Stop if critical
  }
}

async function main() {
  try {

    // --- Patch ---
    run('fetch:patch', 'tsx scripts/fetch-patch.ts')

    // --- Items ---
    run('fetch:items', 'tsx scripts/fetch-items.ts')
    run('generate:items', 'tsx scripts/generate-items.ts')

    // --- Champions ---
    run('fetch:champions', 'tsx scripts/fetch-champions.ts')
    run('generate:champion-index', 'tsx scripts/generate-champion-index.ts')
    run('generate:champions', 'tsx scripts/generate-champions.ts')
    run('generate:champion-skins', 'tsx scripts/generate-champion-skins.ts')
    run('generate:champions-lite', 'tsx scripts/generate-champions-lite.ts')
   run('generate:max-stats', 'tsx scripts/generate-max-stats.ts')

    // --- Runes ---
    run('fetch:runes', 'tsx scripts/fetch-runes.ts')
    run('generate:runes', 'tsx scripts/generate-runes.ts')
    run('generate:rune-index', 'tsx scripts/generate-rune-index.ts')

    // --- Spells ---
    // run('fetch:summoner-spells', 'tsx scripts/fetch-spells.ts')

    console.log('\n🎉 All scripts completed successfully!')
  }
  catch (err) {
    console.error('\n🔥 Script sequence aborted.')
  }
}

main()
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

export async function championUpdate() {
  try {
    // --- Champions ---
    run('fetch:champions', 'tsx scripts/champions/fetch-champions.ts')
    run('generate:champions', 'tsx scripts/champions/generate-champions.ts')
    run('generate:champion-index', 'tsx scripts/champions/generate-champion-index.ts')
    run('generate:champions-lite', 'tsx scripts/champions/generate-champions-lite.ts')
    run('generate:champions-titles', 'tsx scripts/champions/generate-champion-title-index.ts')
    run('generate:champion-skins', 'tsx scripts/champions/generate-champion-skins.ts')
    run('generate:max-stats', 'tsx scripts/champions/generate-max-stats.ts')

    console.log('\n🎉 All scripts completed successfully!')
  }
  catch (err) {
    console.error('\n🔥 Script sequence aborted.')
  }
}

championUpdate()
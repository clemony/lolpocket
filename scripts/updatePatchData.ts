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
    // --- Items ---
    run('fetch:items', 'tsx scripts/fetchItems.ts')
    run('generate:item-index', 'tsx scripts/generateItemIndex.ts')
    run('generate:items', 'tsx scripts/generateItems.ts')
    run('generate:item-effects', 'tsx scripts/generateItemEffects.ts')

    // --- Champions ---
    run('fetch:champions', 'tsx scripts/fetchChampions.ts')
    run('generate:champion-index', 'tsx scripts/generateChampionIndex.ts')
    run('generate:champions', 'tsx scripts/generateChampions.ts')
    run('generate:champion-skins', 'tsx scripts/generateChampionSkins.ts')
    run('generate:champions-lite', 'tsx scripts/generateChampionsLite.ts')
    // run('generate:max-stats', 'tsx scripts/generateMaxStats.ts')

    // --- Runes ---
    run('fetch:runes', 'tsx scripts/fetchRunes.ts')
    run('generate:runes', 'tsx scripts/generateRunes.ts')

    // --- Spells ---
    // run('fetch:summoner-spells', 'tsx scripts/fetchSpells.ts')

    console.log('\n🎉 All scripts completed successfully!')
  }
  catch (err) {
    console.error('\n🔥 Script sequence aborted.')
  }
}

main()
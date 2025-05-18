import { execSync } from 'child_process'

const run = (label: string, cmd: string) => {
  try {
    console.log(`\n⏳ Running: ${label}`)
    execSync(cmd, { stdio: 'inherit' })
    console.log(`✅ Finished: ${label}`)
  } catch (err) {
    console.error(`❌ Failed: ${label}`)
    throw err // Stop if critical
  }
}

const main = async () => {
  try {
    // --- Items ---
    run('fetch:items', 'tsx scripts/fetchItems.ts')
    
    run('generate:items', 'tsx scripts/generateItems.ts')
   run('generate:item-effects', 'tsx scripts/generateItemEffects.ts')

    // --- Champions ---
    run('fetch:champions', 'tsx scripts/fetchChampions.ts')

    run('generate:champions', 'tsx scripts/generateChampions.ts')
    run('generate:champion-skins', 'tsx scripts/generateChampionSkins.ts')
    run('generate:champions-lite', 'tsx scripts/generateChampionsLite.ts')
    //run('generate:max-stats', 'tsx scripts/generateMaxStats.ts')

    // --- Runes ---
    run('generate:runes-raw', 'tsx scripts/generateRunesRaw.ts')
    run('generate:runes', 'tsx scripts/generateRunes.ts')

    // --- Spells ---
    run('fetch:summoner-spells', 'tsx scripts/fetchSpells.ts')

    console.log('\n🎉 All scripts completed successfully!')
  } catch (err) {
    console.error('\n🔥 Script sequence aborted.')
    process.exit(1)
  }
}

main()
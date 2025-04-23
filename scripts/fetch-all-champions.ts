import { writeAllChampions } from '../server/api/utils/write-all-champions'
import process from 'node:process'

writeAllChampions()
  .then(() => {
    console.log('✅ Finished writing champion data.')
  })
  .catch((err) => {
    console.error('❌ Error writing champion data:', err)
    process.exit(1)
  })

// npx ts-node scripts/fetch-all-champions.ts
// npm run fetch:champions
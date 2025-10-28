import fs from 'node:fs'
<<<<<<< HEAD
import { resolvePath } from '../resolvePath'
import { markUpdate } from '../utils'
=======
import path from 'node:path'
import { markUpdate } from '~~/server/utils'
>>>>>>> refs/remotes/origin/main

interface Item {
  id: number
  name: string
  stats: Record<string, number>
}

<<<<<<< HEAD
const itemsPath = resolvePath('./items/raw/items-lite.json')
=======
const itemsPath = path.resolve('scripts/data/items-lite.json')
>>>>>>> refs/remotes/origin/main
const itemsRaw = fs.readFileSync(itemsPath, 'utf-8')
const items: Item[] = JSON.parse(itemsRaw)

const statIndex: Record<number, Record<string, number>> = {}
const statKeys = new Set<string>()

for (const item of items) {
  const { id, stats } = item

  if (stats && Object.keys(stats).length > 0) {
    statIndex[id] = stats
    for (const key of Object.keys(stats)) {
      statKeys.add(key)
    }
  }
}

// Generate StatRecord interface based on collected keys
const sortedStatKeys = [...statKeys].sort()
const statRecordInterface = `export interface StatRecord {
${sortedStatKeys.map(k => `  ${JSON.stringify(k)}?: number;`).join('\n')}
}`

const output = `// ${markUpdate()}

${statRecordInterface}

export const itemStatRecord: Record<number, StatRecord> = ${JSON.stringify(statIndex, null, 2)};
`

fs.writeFileSync('./shared/appdata/index/item-stat-index.ts', output)

console.log(
  '✅ item stat record and StatRecord interface written successfully.'
)

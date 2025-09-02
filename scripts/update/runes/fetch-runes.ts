import fs from 'node:fs'

import process from 'node:process'
import { $fetch } from 'ofetch'

const rawData = await $fetch('https:// raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json')
// FIXME

// path trees here: https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json
const transformedRunes = rawData.map((tree: any) => ({
  id: tree.id,
  key: tree.key,
  name: tree.name,
  slots: tree.slots.map((slot: any[]) =>
    slot.map(rune => ({
      id: rune.id,
      key: rune.key,
      name: rune.name,
      description: rune.longDesc,
      tags: rune.recommendationDescriptor.split(','),
    })),
  ),
}))

fs.writeFileSync(
  './raw/runes-raw.json',
  JSON.stringify(rawData, null, 2),
)
fs.writeFileSync(
  './raw/runes.json',
  JSON.stringify(transformedRunes, null, 2),
)

console.log('✅ runes.json written!')

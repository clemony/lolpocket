import fs from 'fs'

const champions = JSON.parse(fs.readFileSync('./public/api/champions.json', 'utf-8'))

const championsLite = Object.values(champions).map((champ)=> {
  const {
    id,
    key,
    name,
    resource,
    attackType,
    stats,
    positions,
    roles,
    attributeRatings,
  } = champ  as ChampionLite

  return {
    id,
    key,
    name,
    resource: capitalize(resource.replace('_', ' ')),
    attackType: capitalize(attackType),
stats: Object.fromEntries(
  Object.entries(stats)
    .filter(([key]) => !key.startsWith('aram') && !key.startsWith('urf'))
    .map(([key, val]) => [
      key,
      Object.fromEntries(
        Object.entries(val).filter(([, v]) => v !== 0)
      )
    ])
    .filter(([, val]) => Object.keys(val).length > 0) // remove stat blocks that are now empty
),
    positions: normalizeArray(positions),
    roles: normalizeArray(roles),
    attributeRatings,
  }
})

fs.writeFileSync(
  './public/api/champions-lite.json',
  JSON.stringify(championsLite, null, 2)
)

console.log('✅ champions-lite.json written!')

function capitalize(str) {
  return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase()
}

function normalizeArray(arr) {
  return Array.isArray(arr)
    ? arr.map((s) => capitalize(s))
    : []
}
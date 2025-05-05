import fs from 'fs'

const champions = JSON.parse(fs.readFileSync('./public/api/champions.json', 'utf-8'))

const championsLite = Object.values(champions).map((champ) => {
  const {
    id,
    key,
    name,
    title,
    fullName,
    icon,
    resource,
    attackType,
    stats,
    positions,
    roles,
    attributeRatings,
  } = champ

  return {
    id,
    key,
    name,
    title,
    fullName,
    icon,
    resource: capitalize(resource),
    attackType: capitalize(attackType),
    stats: Object.fromEntries(
      Object.entries(stats).filter(([key]) => !key.startsWith('aram') && !key.startsWith('urf'))
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
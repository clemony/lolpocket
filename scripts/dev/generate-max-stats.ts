import fs from 'node:fs'

const championsLite = JSON.parse(
  fs.readFileSync('./data/champions-lite.json', 'utf-8'),
)

const level = 18
const highestStats = {}

// function getStatAtLevel(base, growth, level = 18) {
//   if (base == null)
//     return null
//   const totalLevelUps = level - 1

//   if (totalLevelUps === 0 || growth == null)
//     return base

//   const levelGrowth = 0.0175 * totalLevelUps + 0.7025
//   const totalGrowth = growth * totalLevelUps * levelGrowth
//   return base + totalGrowth
// }

// function getAttackSpeedAtLevel(base, growth, ratio, level = 18) {
//   if (base == null || ratio == null)
//     return null
//   const totalLevelUps = level - 1

//   if (totalLevelUps === 0 || growth == null)
//     return base

//   const levelGrowth = 0.0175 * totalLevelUps + 0.7025
//   const bonusAS = growth * totalLevelUps * levelGrowth
//   return base + bonusAS * ratio
// }

// championsLite.forEach((champ: ChampionLiteStat) => {
//   if (!champ?.stats)
//     return

//   const stats = champ.stats
//   const attackSpeedRatio = champ.attackSpeedRatio?.flat // not from stats!

//   Object.entries(stats).forEach(([statName, { flat, perLevel }]) => {
//     let resolved = null

//     if (statName === 'attackSpeed') {
//       resolved = getAttackSpeedAtLevel(flat, perLevel, attackSpeedRatio, level)
//     }
//     else {
//       resolved = getStatAtLevel(flat, perLevel, level)
//     }

//     if (resolved != null) {
//       if (!highestStats[statName] || resolved > highestStats[statName]) {
//         highestStats[statName] = resolved
//       }
//     }
//   })
// })

fs.writeFileSync(
  './data/dev/stat-max-values.json',
  JSON.stringify(highestStats, null, 2),
)
console.log('✅ stat-max-values.json written!')

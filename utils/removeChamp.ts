export default function removeChamp(champ, pocket) {
  console.log('💠 - removeChamp - pocket:', pocket)
  const find = pocket.champions.champions.findIndex(champion => champion.name == champ.name)

  if (find != -1) {
    pocket.champions.champions.splice(find, 1)
  }
}

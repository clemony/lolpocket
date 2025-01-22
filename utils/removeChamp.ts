export default function removeChamp(champ, pocket) {
  console.log('💠 - removeChamp - pocket:', pocket)
  const find = pocket.champions[0].champions.findIndex((champion) => champion.name == champ.name)

  if (find != -1) {
    pocket.champions[0].champions.splice(find, 1)
  }
}

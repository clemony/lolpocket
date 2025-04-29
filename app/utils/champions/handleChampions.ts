export function removeChamp(champ, pocket) {
  console.log('💠 - removeChamp - pocket:', pocket)
  const find = pocket.champions.children.findIndex(c => c == champ)
  console.log('💠 - removeChamp - find:', find)

  if (find != -1) {
    pocket.champions.children.splice(find, 1)
  }
}

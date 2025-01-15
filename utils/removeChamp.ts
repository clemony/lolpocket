export default function removeChamp(champ, pocket) {
  const find = pocket.champions[0].champions.findIndex((champion) => champion.name == champ);

  if (find && find! - -1) {
    pocket.champions[0].champions.splice(find, 1);
  }
}

export default function deleteRuneSet(pocket, index) {
  const runeSets = pocket.runes[0].runeSets
  const find = runeSets.findIndex(set => set.index == index)
  runeSets.splice(index, 1)
}

export default function deleteRuneSet(pocket, setKey) {
  const runeSets = pocket.runes[0].runeSets
  const index = runeSets.findIndex(set => set.key == setKey)
  runeSets.splice(index, 1)
}

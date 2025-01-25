export default function addItemToSet(pocket, itemSet, item) {
  const set = pocket.items[0].itemSets.find(set => set.key === itemSet)

  if (set && Array.isArray(set.items)) {
    set.items.push(item)
  }
}

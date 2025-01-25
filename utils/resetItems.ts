export default function resetItems(key: string) {
  const set = as.value.itemSets.find(set => set.key === key)

  if (set && Array.isArray(set.items)) {
    set.items.splice(0, set.items.length) // Reset the array
  }
}

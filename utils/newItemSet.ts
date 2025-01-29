export default function newItemSet(pocketKey?) {
  if (pocketKey) {
    const pocket = getPocket(pocketKey)

    if (pocket) {
      const newSet = reactive({
        name: `${generateRandomName()} Set`,
        items: [],
      })

      pocket.items.sets.push(newSet)
      if (pocket.items.sets.length == 1) {
        pocket.items.starred = newSet
      }
    }
  }
}

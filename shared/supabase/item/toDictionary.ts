export function toDictionary(nestedData: any): Item[] {
  const itemsArray: Item[] = []

  // Check if the data has the expected structure
  if (!nestedData || typeof nestedData !== 'object') {
    console.error('Unexpected data structure:', nestedData)
    return itemsArray
  }

  // Loop through each item (item name) in the nested data
  Object.keys(nestedData).forEach((name) => {
    const item = nestedData[name]

    // Check if item is an object and contains the expected properties
    if (item && typeof item === 'object') {
      itemsArray.push({
        id: item.id || null,
        name,
        nickname: item.nickname || null,
        tier: item.tier || null,
        type: item.type || null,
        itemlimit: item.itemlimit || null,
        limit: item.limit || null,
        caption: item.caption || null,
        champion: item.champion || null,
        modes: item.modes || null,
        menu: item.menu || null,
        stats: item.stats || null,
        effects: item.effects || null,
        recipe: item.recipe || null,
        buy: item.buy || null,
        removed: item.removed || null,
      })
    }
    else {
      console.error('Item is not an object:', name)
    }
  })

  return itemsArray
}

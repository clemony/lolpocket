export function filterSR(itemData: Array<Item>) {
  let items = itemData.filter(item => item.modes?.['classic sr 5v5'] === true)

  items = items.filter(item => item.removed == null)

  items = items.filter(item => item.champion == null)

  const excludedTypes = ['Distributed', 'Minion', 'Turret', 'Special Game mode items']

  items = items.filter(item => (Array.isArray(item.type) ? !item.type.some(type => excludedTypes.includes(type)) : !excludedTypes.includes(item.type)))

  return items
}

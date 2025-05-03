export async function getItemName(item) {
  const { data: itemData } = await useFetch('/api/items/index.json')
const items = Object.values(itemData.value) as ItemIndex[]
  const a = items.find(i => i.id == item)
  return item.name || null
}
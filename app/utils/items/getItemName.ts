export async function getItemName(item) {
const  itemData  = await $fetch('/api/lists/item-index.json')
const items = Object.values(itemData) as ItemIndex[]
  const a = items.find(i => i.id == item)
  return item.name || null
}
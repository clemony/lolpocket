export function itemName(label: string, id: string) {
  return (
    label === "item" ? itemNameById(Number.parseFloat(id))
    : label === "champion" ? champNameById(Number.parseFloat(id))
    : label === "rune" ? runeNameById(Number.parseFloat(id))
    : label === "spell" ? spellNameById(Number.parseFloat(id))
    : label === "shard" ? shardById(Number.parseFloat(id)).description
    : label === "path" ? id
    : label === "ability" ? abilityNameById(id)
    : null
  )
}
/*
: label === '' ? NameById(id)
*/

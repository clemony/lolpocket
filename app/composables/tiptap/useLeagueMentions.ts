export function getLeagueMentionData() {
  return {
    items: [
      ...championIndex,
      ...itemIndex,
      ...runeIndex,
      ...Object.values(spellbook),
    ],
    groups: [
      {
        name: "Champions",
        icon: "lol:champ",
        items: ix().champions,
      },
      {
        name: "Items",
        icon: "bow",
        items: ix().items,
      },
      {
        name: "Runes",
        icon: "lol:runes",
        items: ix().runes,
      },
      {
        name: "Spells",
        icon: "role:mage",
        items: Object.values(spellbook),
      },
    ],
  }
}

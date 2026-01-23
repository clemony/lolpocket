

export function constructMentionAttrs(rawAttrs: any) {
  const item = attrsToProps(rawAttrs)

  const label =
    ["item", "rune", "spell"].includes(item.key) ? item.key : "champion"

  return {
    class: "mention",
    "data-path": label === "rune" ? runeToPath[item.id]?.toLowerCase() : null,
    "data-role":
      label === "champion" ? champKeyToRole[item.key]?.toLowerCase() : null,
    "data-tier": label === "item" ? itemRank[item.id]?.toLowerCase() : null,
    "data-type": label,
  }
}

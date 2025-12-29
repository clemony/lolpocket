import { attrsToProps, champKeyToRole, getTierGroup, runeToPath } from "#shared"

export function constructMentionAttrs(rawAttrs: any) {
  const item = attrsToProps(rawAttrs)

  const label =
    ["item", "rune", "spell"].includes(item.key) ? item.key : "champion"

  return {
    class: "mention",
    "data-tip": label,
    "data-path": label === "rune" ? runeToPath[item.id]?.toLowerCase() : null,
    "data-role":
      label === "champion" ? champKeyToRole[item.key]?.toLowerCase() : null,
    "data-tier": label === "item" ? getTierGroup(item.id)?.toLowerCase() : null,
  }
}

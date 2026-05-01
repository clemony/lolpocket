export function handlepositions(pocket: Pocket, position?: string) {
  if (!pocket.positions) return

  if (pocket.positions.length > 1 && pocket.positions.includes("all")) {
    const a = pocket.positions.findIndex((r) => r === "all")
    pocket.positions.splice(a, 1)
  }
  if (
    (position && position === "all" && pocket) ||
    pocket.positions.length === 5
  ) {
    pocket.positions = ["all"]
  } else if (pocket.positions.length <= 0) {
    pocket.positions.push("all")
  }
}

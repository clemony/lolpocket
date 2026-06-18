export function getWinrateArc(size: number, id = `winrate-arc-${size}`) {
  return {
    id,
    path: "M2 12 A10 10 0 0 1 22 12",
    sizing: `calc(var(--spacing) * ${size})`,
    viewBox: "0 0 24 24",
  }
}

export function getWinrateArc(
  size: number,
  id = `winrate-arc-${size}`,
  radius = 10.5
) {
  const left = 12 - radius
  const right = 12 + radius

  return {
    id,
    path: `M${right} 12 A${radius} ${radius} 0 1 1 ${left} 12 A${radius} ${radius} 0 1 1 ${right} 12`,
    sizing: `calc(var(--spacing) * ${size})`,
    viewBox: "0 0 24 24",
  }
}

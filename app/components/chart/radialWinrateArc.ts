export function getWinrateArc(
  size: string | number,

  radius = 10.5
) {
  const left = 12 - radius
  const right = 12 + radius

  return {
    path: `M${right} 12 A${radius} ${radius} 0 1 1 ${left} 12 A${radius} ${radius} 0 1 1 ${right} 12`,
    sizing: typeof size === "string" ? size : `calc(var(--spacing) * ${size})`,
  }
}

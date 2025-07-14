export function computeKDA(kills: number, assists: number, deaths: number) {
  return Math.round(((kills + assists) / deaths) * 100)
}

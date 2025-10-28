export function getStatAtLevel(
  base?: number | undefined,
  growth?: number,
  level = 18
): number | null {
<<<<<<< HEAD
  if (base === undefined)
    return null
  const totalLevelUps = level - 1

  if (totalLevelUps === 0 || growth === undefined)
=======
  if (base === null)
    return null
  const totalLevelUps = level - 1

  if (totalLevelUps === 0 || growth === null)
>>>>>>> refs/remotes/origin/main
    return base

  const levelGrowth = 0.0175 * totalLevelUps + 0.7025
  const totalGrowth = growth * totalLevelUps * levelGrowth
  return base + totalGrowth
}

export function getAttackSpeedAtLevel(
  base?: number,
  growth?: number,
  ratio?: number,
  level = 18
): number | null {
<<<<<<< HEAD
  if (base === undefined || ratio === undefined)
    return null
  const totalLevelUps = level - 1

  if (totalLevelUps === 0 || growth === undefined)
=======
  if (base === null || ratio === null)
    return null
  const totalLevelUps = level - 1

  if (totalLevelUps === 0 || growth === null)
>>>>>>> refs/remotes/origin/main
    return base

  const levelGrowth = 0.0175 * totalLevelUps + 0.7025
  const bonusAS = growth * totalLevelUps * levelGrowth
  return base + bonusAS * ratio
}
export default () => {
  return 'Hello Util'
}

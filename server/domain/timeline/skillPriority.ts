type Skill = 1 | 2 | 3

export function skillPriority(skillOrder: number[]) {
  const counts: Record<Skill, number> = { 1: 0, 2: 0, 3: 0 }
  const hitFiveAt: Record<Skill, number | null> = { 1: null, 2: null, 3: null }

  skillOrder.forEach((raw, idx) => {
    if (raw !== 1 && raw !== 2 && raw !== 3) return
    const s = raw as Skill
    counts[s]++
    if (counts[s] === 5) hitFiveAt[s] = idx
  })

  const skillsHitFive = Object.entries(hitFiveAt)
    .map(([k, v]) => [Number(k) as Skill, v] as [Skill, number | null])
    .filter(([, t]) => t !== null)
    .sort((a, b) => (a[1]! - b[1]!))

  // highest-priority single skill (same as before)
  const primary =
    skillsHitFive.length > 0
      ? skillsHitFive[0][0]
      : ([
          1, 2, 3,
        ] as Skill[]).sort((a, b) => {
          if (counts[b] !== counts[a]) return counts[b] - counts[a]
          return skillOrder.lastIndexOf(a) - skillOrder.lastIndexOf(b)
        })[0]

  // NEW: full priority ranking
  const skillRanking = ([1, 2, 3] as Skill[]).sort((a, b) => {
    // 1) who hit level 5 first?
    const fa = hitFiveAt[a]
    const fb = hitFiveAt[b]

    if (fa !== null && fb !== null) return fa - fb
    if (fa !== null) return -1
    if (fb !== null) return 1

    // 2) neither hit 5 → compare counts
    if (counts[b] !== counts[a]) return counts[b] - counts[a]

    // 3) tie → earlier achievement (last index smaller = leveled earlier)
    return skillOrder.lastIndexOf(a) - skillOrder.lastIndexOf(b)
  })

  return [
    primary, skillRanking[1], skillRanking[2]
  ].join(',').replace('1', 'Q').replace('2', 'W').replace('3', 'E').split(',')
}
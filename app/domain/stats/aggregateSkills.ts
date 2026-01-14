const SKILL_BY_INDEX: Record<number, SkillKey> = {
  1: "Q",
  2: "W",
  3: "E",
  4: "R",
}

type PriorityKey = `${SkillKey}>${SkillKey}>${SkillKey}`
const MAX_LEVEL = 18
type SkillPriorityStats = Record<PriorityKey, StatDetail>

export type SkillLevelStats = Record<
  number, // level (1–18)
  Record<SkillKey, StatDetail>
>

export interface AggregatedSkills {
  byLevel: SkillLevelStats
  priority: SkillPriorityStats
}

export const EMPTY_SKILL_STATS = {
  byLevel: {
    Q: { games: 0, win: 0 },
    W: { games: 0, win: 0 },
    E: { games: 0, win: 0 },
    R: { games: 0, win: 0 },
  },
  priority: {} as SkillPriorityStats,
}

function createEmptySkillLevel() {
  return {
    Q: { games: 0, win: 0 },
    W: { games: 0, win: 0 },
    E: { games: 0, win: 0 },
    R: { games: 0, win: 0 },
  }
}
export function aggregateSkills(matches: MatchPlayerData[]): AggregatedSkills {
  const priority = <SkillPriorityStats>{}
  const byLevel: SkillLevelStats = {}
  const totalMatches = matches?.length

  for (let level = 1; level <= MAX_LEVEL; level++) {
    byLevel[level] = createEmptySkillLevel()
  }

  for (const { timeline, player } of matches) {
    const win = player.win

    if (!timeline) continue

    const order = timeline?.skills.order
    const prio = timeline?.skills.priority.join(">") as PriorityKey

    // 1️⃣ Priority stats (per match)
    if (!priority[prio]) {
      priority[prio] = { games: 0, win: 0 }
    }
    priority[prio].games++
    if (win) priority[prio].win++

    for (let i = 0; i < order.length; i++) {
      const level = i + 1
      const skill = SKILL_BY_INDEX[order[i]]
      if (!skill) continue

      const s = byLevel[level][skill]
      s.games++
      if (win) s.win++
    }
  }

  // 3️⃣ Compute winrates
  for (const level of Object.values(byLevel)) {
    for (const stat of Object.values(level)) {
      stat.winrate =
        stat.games ? Math.round((stat.win / stat.games) * 1000) / 10 : 0
      stat.pickrate = Math.round((stat.games / totalMatches) * 1000) / 10
    }
  }

  for (const stat of Object.values(priority)) {
    stat.winrate =
      stat.games ? Math.round((stat.win / stat.games) * 1000) / 10 : 0
    stat.pickrate = Math.round((stat.games / totalMatches) * 1000) / 10
  }

  return {
    byLevel,
    priority,
  }
}

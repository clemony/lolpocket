export interface ItemSlotOrder {
  trinket: OrderedTimedStatEntry[]
  boots: OrderedTimedStatEntry[]
  early: OrderedTimedStatEntry[]
  support: OrderedTimedStatEntry[]
  legendary: OrderedTimedStatEntry[][]
  best?: {
    core?: {
      items: OrderedTimedStatEntry[]
      winrate: number
    }
    slots?: OrderedTimedStatEntry[]
    byWinrate?: OrderedTimedStatEntry[]
  }
}

export interface ChampionItemStats {
  trinket: Record<number, TimedStatDetail>
  support: Record<number, TimedStatDetail>
  boots: Record<number, TimedStatDetail>
  early: Record<number, TimedStatDetail>
  legendary: Array<Record<number, TimedStatDetail>>
}

type ItemSetKey = string // e.g. "1055,2003,2003"

const startingItemSets: Record<ItemSetKey, ItemSetStat> = {}
export const useChampionItemTimelineStats = (
  matchData: ComputedRef<MatchPlayerData[]>
) => {
  return computed<ItemSlotOrder>(() => {
    const out: ChampionItemStats = {
      trinket: {},
      boots: {},
      early: {},
      support: {},
      legendary: [],
    }

    const allLegendaries: Record<number, TimedStatDetail> = {}

    for (const m of matchData.value) {
      if (!m.player || !m.timeline) continue
      const win = m.player.win
      if (win === null || win === "remake") continue

      const finalItems = getFinalItems(m.player.items)
      const supportItem = finalItems.find((id) => SUPPORT_LEGENDARIES.has(id))
      const acquireTimes = getItemAcquireTimes(
        m.timeline,
        finalItems,
        supportItem
      )

      const STARTING_ITEMS_CUTOFF = 60 * 1000 // ms

      const startingItems = [...acquireTimes]
        .filter(([, ts]) => ts <= STARTING_ITEMS_CUTOFF)
        .map(([id]) => id)

      const setItems = [...new Set(startingItems)].sort((a, b) => a - b)
      if (!setItems.length) continue

      const key = setItems.join(",")

      const stat =
        startingItemSets[key] ??
        (startingItemSets[key] = {
          items: setItems,
          games: 0,
          win: 0,
          winrate: 0,
          pickrate: 0,
        })

      stat.games++
      if (win) stat.win++

      for (const [id, ts] of acquireTimes) {
        if (ts <= TEN_MINUTES) {
          bumpTimedStatDetail(out.early, id, win, ts)
        }
      }
      const classified = finalItems.map((id) => {
        const ts = acquireTimes.get(id)
        return { id, ts }
      })

      for (const { id, ts } of classified) {
        if (isTrinket(id)) {
          bumpTimedStatDetail(out.trinket, id, win, ts)
          continue
        }

        if (SUPPORT_LEGENDARIES.has(id)) {
          bumpTimedStatDetail(out.support, id, win, ts)
          continue
        }

        if (isBoots(id)) {
          bumpTimedStatDetail(out.boots, id, win, ts)
          continue
        }

        if (isLegendary(id)) {
          bumpTimedStatDetail(allLegendaries, id, win, ts)
        }
      }

      const legendaryBySlot = new Map<number, { id: number; ts: number }>()

      for (const item of classified) {
        if (!isLegendary(item.id)) continue
        if (SUPPORT_LEGENDARIES.has(item.id)) continue

        const slotKey = getLegendarySlotKey(item.id)

        const existing = legendaryBySlot.get(slotKey)

        // Keep earliest acquisition for that slot
        if (!existing || item.ts < existing.ts) {
          legendaryBySlot.set(slotKey, item)
        }
      }

      const legendaries = [...legendaryBySlot.values()].sort(
        (a, b) => a.ts - b.ts
      )
      legendaries.forEach(({ id, ts }, slot) => {
        out.legendary[slot] ??= {}
        bumpTimedStatDetail(out.legendary[slot], id, win, ts)
      })
    }
    // compute winrates
    const totalMatches = matchData.value.length
    for (const bucket of [
      out.trinket,
      out.boots,
      out.early,
      out.support,
      ...Object.values(out.legendary),
      allLegendaries,
    ]) {
      for (const stat of Object.values(bucket)) {
        stat.winrate = Math.round((stat.win / stat.games) * 1000) / 10
        stat.pickrate = Math.round((stat.games / totalMatches) * 1000) / 10
      }
    }

    const legendary: OrderedTimedStatEntry[][] = []

    for (const [slot, rec] of Object.entries(out?.legendary)) {
      legendary[Number(slot)] = sortTimedByPickrate(rec)
    }

    const support = sortTimedByWinratePickrate(out?.support)
    console.log("🥸 - useChampionItemTimelineStats - support:", support)
    const boot = sortTimedByWinratePickrate(out?.boots)

    const supportPickrateSum = support.reduce(
      (ac, [, stat]) => ac + (stat.pickrate ?? 0),
      0
    )

    const isSupport = supportPickrateSum > 51

    const bootPickrateSum = boot.reduce(
      (ac, [, stat]) => ac + (stat.pickrate ?? 0),
      0
    )

    const isBoot = bootPickrateSum > 51
    const core: OrderedTimedStatEntry[] = []

    if (isSupport && support.length) {
      core.push(support[0])
    }

    if (isBoot && boot.length) {
      core.push(boot[0])
    }

    // fill remaining slots from legendary
    for (let i = 0; i < legendary.length && core.length < 3; i++) {
      const slot = legendary[i]
      if (!slot?.length) continue
      core.push(slot[0])
    }
    const sortedCore = sortTimedByTime(core)

    const excluded = new Set<number>(sortedCore.flatMap((i) => i[0]))
    const slots: OrderedTimedStatEntry[] = []

    let slotIndex = isSupport ? 1 : 2

    while (slots.length < 3 && slotIndex < legendary.length) {
      const slotItems = legendary[slotIndex]

      if (!slotItems?.length) {
        slotIndex++
        continue
      }

      const next = slotItems.find(([id]) => !excluded.has(id))
      if (next) {
        slots.push(next)
        excluded.add(next[0])
      }

      slotIndex++
    }

    for (const stat of Object.values(startingItemSets)) {
      stat.winrate = Math.round((stat.win / stat.games) * 1000) / 10
      stat.pickrate =
        Math.round((stat.games / matchData.value.length) * 1000) / 10
    }

    return {
      trinket: sortTimedByPickrate(out.trinket),
      boots: sortTimedByPickrate(out.boots),
      early: sortTimedByPickrate(out.early),
      support: sortTimedByPickrate(out.support),
      legendary,
      starting: sortTimedByPickrate(startingItemSets)?.[0]?.[1],
      best: {
        core: {
          items: sortedCore,
          winrate:
            core.length ?
              Math.round(
                (core.reduce((ac, [, s]) => ac + (s.winrate ?? 0), 0) /
                  core.length) *
                  10
              ) / 10
            : 0,
          games:
            core.length ?
              Math.round(
                (core.reduce((ac, [, s]) => ac + (s.games ?? 0), 0) /
                  core.length) *
                  10
              ) / 10
            : 0,
          pickrate:
            core.length ?
              Math.round(
                (core.reduce((ac, [, s]) => ac + (s.pickrate ?? 0), 0) /
                  core.length) *
                  10
              ) / 10
            : 0,
        },
        slots,
        byWinrate: sortTimedByWinrate(allLegendaries),
      },
    }
  })
}

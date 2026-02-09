//
export interface ItemSlotOrder {
  best?: {
    core?: {
      items: OrderedTimedStatEntry[]
      games: number
      winrate: number
    }
    slots?: OrderedTimedStatEntry[]
    byWinrate?: OrderedTimedStatEntry[]
  }
  boots: OrderedTimedStatEntry[]
  early: OrderedTimedStatEntry[]
  legendary: OrderedTimedStatEntry[][]
  support: OrderedTimedStatEntry[]
  trinket: OrderedTimedStatEntry[]
}

export interface ChampionItemStats {
  boots: Record<number, StatDetail>
  early: Record<number, StatDetail>
  legendary: Array<Record<number, StatDetail>>
  support: Record<number, StatDetail>
  trinket: Record<number, StatDetail>
}

type ItemSetKey = string // e.g. "1055,2003,2003"

const startingItemSets: Record<ItemSetKey, ItemSetStat> = {}
export function useChampionItemTimelineStats(
  matchData: ComputedRef<MatchPlayerData[]>
) {
  return computed<ItemSlotOrder>(() => {
    const out: ChampionItemStats = {
      boots: {},
      early: {},
      legendary: [],
      support: {},
      trinket: {},
    }

    const allLegendaries: Record<number, StatDetail> = {}

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
          games: 0,
          items: setItems,
          pickrate: 0,
          win: 0,
          winrate: 0,
        })

      stat.games++
      stat.win ??= 0
      if (win) stat.win++

      for (const [id, ts] of acquireTimes) {
        if (ts <= TEN_MINUTES) {
          bumpStatDetail(out.early, id, win, ts)
        }
      }
      const classified = finalItems.map((id) => {
        const ts = acquireTimes.get(id)
        return { id, ts }
      })

      for (const { id, ts } of classified) {
        if (ts == null) continue
        if (isTrinket(id)) {
          bumpStatDetail(out.trinket, id, win, ts)
          continue
        }

        if (SUPPORT_LEGENDARIES.has(id)) {
          bumpStatDetail(out.support, id, win, ts)
          continue
        }

        if (isBoots(id)) {
          bumpStatDetail(out.boots, id, win, ts)
          continue
        }

        if (isLegendary(id)) {
          bumpStatDetail(allLegendaries, id, win, ts)
        }
      }

      const legendaryBySlot = new Map<number, { id: number; ts: number }>()

      for (const item of classified) {
        if (item.ts == null) continue
        if (!isLegendary(item.id)) continue
        if (SUPPORT_LEGENDARIES.has(item.id)) continue

        const slotKey = getLegendarySlotKey(item.id)
        const existing = legendaryBySlot.get(slotKey)
        const current = { id: item.id, ts: item.ts }

        // Keep earliest acquisition for that slot
        if (!existing || current.ts < existing.ts) {
          legendaryBySlot.set(slotKey, current)
        }
      }

      const legendaries = [...legendaryBySlot.values()].sort(
        (a, b) => a.ts - b.ts
      )
      legendaries.forEach(({ id, ts }, slot) => {
        out.legendary[slot] ??= {}
        bumpStatDetail(out.legendary[slot], id, win, ts)
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
        stat.winrate = Math.round(((stat.win ?? 0) / stat.games) * 1000) / 10
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
      const first = support[0]
      if (first) core.push(first)
    }

    if (isBoot && boot.length) {
      const first = boot[0]
      if (first) core.push(first)
    }

    // fill remaining slots from legendary
    for (let i = 0; i < legendary.length && core.length < 3; i++) {
      const slot = legendary[i]
      if (!slot?.length) continue
      const first = slot[0]
      if (first) core.push(first)
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
      stat.winrate = Math.round(((stat.win ?? 0) / stat.games) * 1000) / 10
      stat.pickrate =
        Math.round((stat.games / matchData.value.length) * 1000) / 10
    }

    return {
      boots: sortTimedByPickrate(out.boots),
      early: sortTimedByPickrate(out.early),
      legendary,
      starting: sortTimedByPickrate(startingItemSets)?.[0]?.[1],
      support: sortTimedByPickrate(out.support),
      trinket: sortTimedByPickrate(out.trinket),
      best: {
        slots,
        byWinrate: sortTimedByWinrate(allLegendaries),
        core: {
          games:
            core.length ?
              Math.round(
                (core.reduce((ac, [, s]) => ac + (s.games ?? 0), 0) /
                  core.length) *
                  10
              ) / 10
            : 0,
          items: sortedCore,
          pickrate:
            core.length ?
              Math.round(
                (core.reduce((ac, [, s]) => ac + (s.pickrate ?? 0), 0) /
                  core.length) *
                  10
              ) / 10
            : 0,
          winrate:
            core.length ?
              Math.round(
                (core.reduce((ac, [, s]) => ac + (s.winrate ?? 0), 0) /
                  core.length) *
                  10
              ) / 10
            : 0,
        },
      },
    }
  })
}

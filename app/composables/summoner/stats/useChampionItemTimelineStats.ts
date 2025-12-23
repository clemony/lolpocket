export interface ItemSlotOrder {
  trinket: OrderedStatEntry[]
  boots: OrderedStatEntry[]
  early: OrderedStatEntry[]
  support: OrderedStatEntry[]
  legendary: Record<number, OrderedStatEntry[]>
}

export interface ChampionItemStats {
  trinket: Record<number, TimedStatDetail>
  support: Record<number, TimedStatDetail>
  boots: Record<number, TimedStatDetail>
  early: Record<number, TimedStatDetail>
  legendary: Record<number, Record<number, TimedStatDetail>>
}

export const useChampionItemTimelineStats = (
  matchData: ComputedRef<MatchPlayerData[]>
) => {
  return computed<ItemSlotOrder>(() => {
    if (!matchData.value || matchData.value.length === 0) {
      return {
        trinket: [],
        boots: [],
        early: [],
        support: [],
        legendary: {},
      }
    }

    const out = <ChampionItemStats>{
      trinket: {},
      boots: {},
      early: {},
      support: {},
      legendary: {},
    }

    for (const m of matchData.value) {
      if (!m.player || !m.timeline) continue
      const win = m.player.win
      if (win == null) continue

      const finalItems = getFinalItems(m.player.items)
      const supportItem = finalItems.find((id) => SUPPORT_LEGENDARIES.has(id))
      const acquireTimes = getItemAcquireTimes(
        m.timeline,
        finalItems,
        supportItem
      )

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

        if (ts <= TEN_MINUTES) {
          bumpTimedStatDetail(out.early, id, win, ts)
          continue
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
        if (!out.legendary[slot]) out.legendary[slot] = {}
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
    ]) {
      for (const stat of Object.values(bucket)) {
        stat.winrate = Math.round((stat.win / stat.games) * 1000) / 10
        stat.pickrate = Math.round((stat.games / totalMatches) * 1000) / 10
      }
    }

    return {
      trinket: sortedEntriesByWinratePickrate(out.trinket),
      boots: sortedEntriesByWinratePickrate(out.boots),
      early: sortedEntriesByWinratePickrate(out.early),
      support: sortedEntriesByWinratePickrate(out.support),
      legendary: Object.fromEntries(
        Object.entries(out.legendary).map(([slot, rec]) => [
          Number(slot),
          sortedEntriesByWinratePickrate(rec),
        ])
      ),
    }
  })
}

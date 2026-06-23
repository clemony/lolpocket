import type { MaybeRef } from "vue"
//
import { unref } from "vue"
import { bumpStat } from "~/domain/summoner/stats/helpers/bumpValues"
import { pickBestGeneric } from "~/domain/summoner/stats/helpers/pickBest"
function makeRunePageKey(r: PlayerRunes) {
  return [r.keystone, ...r.primary.runes, "|", ...r.secondary.runes].join("-")
}

function scorePage(p: RunePageStats) {
  const pickWeight = Math.log10(p.games + 1) // dampens spam
  return p.winrate ? p.winrate * pickWeight : 0
}

export function pickBestShard(
  stats: Record<number, StatDetail>,
  minGames = 5
): number | undefined {
  const res = pickBestGeneric(stats, minGames)
  return res ? Number(Object.keys(res)[0]) : undefined
}

export function useChampionRuneStats(source: MaybeRef<MatchPlayerData[]>) {
  return computed(() => {
    const matches = unref(source) ?? []
    const keystone: Record<number, StatDetail> = {}
    const primary: Record<number, StatDetail> = {}
    const secondary: Record<number, StatDetail> = {}
    const pages: Record<RunePageKey, RunePageStats> = {}

    const shards: ShardStats = {
      0: {},
      1: {},
      2: {},
    }

    const totalMatches = matches.length

    for (const match of matches) {
      const p = match.player
      if (!p || p.win === "remake") continue

      bumpStat(keystone, p.runes.keystone, p.win)

      for (const id of p.runes.primary.runes) {
        bumpStat(primary, id, p.win)
      }

      for (const id of p.runes.secondary.runes) {
        bumpStat(secondary, id, p.win)
      }

      //  slot-aware shard aggregation
      p.runes.shards.forEach((shardId, slot) => {
        if (p.win !== "remake")
          bumpStat(shards[slot as ShardSlot], shardId, p.win)
      })

      const r = p.runes

      const primaryPath = pathNameById(r.primary.path)
      const secondaryPath = pathNameById(r.secondary.path)

      // enforce path constraints (defensive)
      if (!primaryPath || !secondaryPath) continue
      if (primaryPath === secondaryPath) continue

      const key = makeRunePageKey(r)

      if (!pages[key]) {
        pages[key] = {
          games: 0,
          win: 0,
          winrate: 0,

          keystone: r.keystone,
          primaryPath,
          secondaryPath,
          primaryRunes: [...r.primary.runes],
          secondaryRunes: [...r.secondary.runes],
          shards: [...r.shards],
        }
      }

      pages[key].games++
      pages[key].win ??= 0
      if (p.win) pages[key].win++
    }

    for (const bucket of [
      keystone,
      primary,
      secondary,
      shards[0],
      shards[1],
      shards[2],
    ]) {
      for (const key in bucket) {
        const s = bucket[key]
        if (!s) continue
        s.winrate = Math.round(((s.win ?? 0) / s.games) * 1000) / 10
        s.pickrate = Math.round((s.games / totalMatches) * 1000) / 10
      }
    }

    const allPages = Object.values(pages)

    let bestPage: RunePageStats | undefined
    let bestScore = -Infinity
    let usedFallback = false

    // 1️⃣ Primary pass: enforce sample-size guard
    for (const page of allPages) {
      page.winrate = Math.round(((page.win ?? 0) / page.games) * 1000) / 10
      page.pickrate = Math.round((page.games / totalMatches) * 1000) / 10
      if (page.games < 5) continue

      const s = scorePage(page)
      if (s > bestScore) {
        bestScore = s
        bestPage = page
      }
    }

    // 2️⃣ Fallback: if nothing qualified, relax the guard
    if (!bestPage) {
      usedFallback = true
      for (const page of allPages) {
        const s = scorePage(page)
        if (s > bestScore) {
          bestScore = s
          bestPage = page
        }
      }
    }

    const bestShards = [
      pickBestShard(shards[0]),
      pickBestShard(shards[1]),
      pickBestShard(shards[2]),
    ]

    return {
      keystone,
      all: allPages,
      best: bestPage && {
        ...bestPage,
        shards: bestShards,
      },
      primary,
      secondary,
      shards,
      usedFallback,
    }
  })
}

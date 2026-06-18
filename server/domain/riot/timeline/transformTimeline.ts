import { skillPriority } from "~~/server/domain/riot/timeline/skillPriority"
import { ITEM_EVENT_TYPES } from "./itemEventTypes"
import { normalizeItemEvents } from "./normalizeItemEvents"
import { toDeathEvent } from "./toDeathEvent"

export function transformTimeline(raw: any): Record<string, PlayerTimeline> {
  const matchId = raw.metadata.matchId

  const byId = new Map<number, any>()
  const byPuuid = new Map<number, string>()

  for (const p of raw.info.participants) {
    byId.set(p.participantId, p)
    byPuuid.set(p.participantId, p.puuid)
  }

  const allEvents = raw.info.frames.flatMap((f: any) => f.events || [])

  const isKillEvent = (e: any) =>
    e.type === "CHAMPION_KILL" || e.type === "CHAMPION_SPECIAL_KILL"

  const FIFTEEN_MIN = 15 * 60 * 1000

  const result: Record<string, PlayerTimeline> = {}

  for (const [id, participant] of byId.entries()) {
    const puuid = participant.puuid
    const teamId = id <= 5 ? 100 : 200

    // ITEM EVENTS
    const items = allEvents.filter(
      (e: any) => ITEM_EVENT_TYPES.has(e.type) && e.participantId === id
    )

    // DEATHS
    const deaths = allEvents
      .filter((e: any) => isKillEvent(e) && e.victimId === id)
      .map(toDeathEvent)

    // KILLS
    const kills = allEvents
      .filter((e: any) => isKillEvent(e) && e.killerId === id)
      .map(toDeathEvent)

    // ASSISTS
    const assists = allEvents
      .filter(
        (e: any) =>
          isKillEvent(e) &&
          Array.isArray(e.assistingParticipantIds) &&
          e.assistingParticipantIds.includes(id)
      )
      .map(toDeathEvent)

    const deathsBefore15 = deaths.filter(
      (d: { timestamp: number }) => d.timestamp < FIFTEEN_MIN
    ).length
    const killsBefore15 = kills.filter(
      (k: { timestamp: number }) => k.timestamp < FIFTEEN_MIN
    ).length
    const assistsBefore15 = assists.filter(
      (a: { timestamp: number }) => a.timestamp < FIFTEEN_MIN
    ).length

    // SKILLS
    const skillOrder = allEvents
      .filter((e: any) => e.type === "SKILL_LEVEL_UP" && e.participantId === id)
      .map((e: { skillSlot: any }) => e.skillSlot)

    const priority = skillPriority(skillOrder)

    // SHOP TIME
    // const shopTimeMs = computeShopTime(raw.info.frames, allEvents, id, teamId)

    result[puuid] = {
      puuid,
      assists,
      deaths,
      items: normalizeItemEvents(items),
      kills,
      matchId,
      skills: {
        order: skillOrder,
        priority,
      },
      // timeShoppingInSec: Math.round(shopTimeMs / 1000),
      stats: {
        assistsBefore15,
        deathsBefore15,
        killsBefore15,
      },
    }
  }
  return result
}

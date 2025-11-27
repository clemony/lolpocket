import fs from "node:fs"
import path from "node:path"
import { PlayerTimeline } from "../../../types"
import { toDeathEvent } from "./toDeathEvent"

const rawPath = path.resolve("../timeline.json")
const outputPath = path.resolve("../data/timeline-parsed.json")
const raw = JSON.parse(fs.readFileSync(rawPath, "utf-8"))

export function transformTimeline(raw: any, puuid: string): PlayerTimeline {
  const id = raw.info.participants.find(
    (p: any) => p.puuid === puuid
  )?.participantId
  if (!id) throw new Error(`puuid not found in match: ${puuid}`)

  const allEvents = raw.info.frames.flatMap((f: any) => f.events || [])

  const isKillEvent = (e: any) =>
    e.type === "CHAMPION_KILL" || e.type === "CHAMPION_SPECIAL_KILL"

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

  const FIFTEEN_MIN = 15 * 60 * 1000 // 900000
  const deathsBefore15 = deaths.filter(
    (d: { timestamp: number }) => d.timestamp < FIFTEEN_MIN
  ).length
  const killsBefore15 = kills.filter(
    (k: { timestamp: number }) => k.timestamp < FIFTEEN_MIN
  ).length
  const assistsBefore15 = assists.filter(
    (a: { timestamp: number }) => a.timestamp < FIFTEEN_MIN
  ).length

  return {
    puuid,
    matchId: raw.metadata.matchId,
    stats: { deathsBefore15, killsBefore15, assistsBefore15 },
    items,
    kills,
    assists,
    deaths,
  }
}

// Riot's only valid item event types
const ITEM_EVENT_TYPES = new Set([
  "ITEM_PURCHASED",
  "ITEM_UNDO",
  "ITEM_SOLD",
  "ITEM_DESTROYED",
  "ITEM_OBTAINED",
])

const line = transformTimeline(
  raw,
  "P84Ak9qWwk2epueCD7ZeGQeqIXSiJnNAc_-EoqEWj1jT7uODKXTGY1rpvSO7ePL9XyygjZOvb0Jm2A"
)
fs.writeFileSync(
  outputPath,
  `
export const playerTimeline = ${JSON.stringify(line, null, 2)}`
)

import type { ChampionDeathEvent } from "../../../types"

export function toDeathEvent(e: any): ChampionDeathEvent {
  return {
    killerId: e.killerId ?? 0,
    assistingParticipantIds: e.assistingParticipantIds ?? [],
    victimId: e.victimId,
    timestamp: e.timestamp,
  }
}

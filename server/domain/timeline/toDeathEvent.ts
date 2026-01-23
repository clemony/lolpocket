export function toDeathEvent(e: any): ChampionDeathEvent {
  return {
    assistingParticipantIds: e.assistingParticipantIds ?? [],
    killerId: e.killerId ?? 0,
    timestamp: e.timestamp,
    victimId: e.victimId,
  }
}

import {
  fromAbsolute,
  getLocalTimeZone,
  isSameDay,
  parseAbsolute,
  parseAbsoluteToLocal,
  parseZonedDateTime,
  Time,
  toCalendarDateTime,
  toZoned,
  ZonedDateTime,
} from "@internationalized/date"
import type { MatchFilter } from "../../app/stores/store.match"
import type { MatchData } from "../types/types.match"
export function matchFilters(
  puuid: string,
  match: MatchData,
  options: MatchFilter
) {
  const {
    ally,
    champion,
    ignoreRole = false,
    patch,
    queue,
    role,
    date,
  } = options

  const player = match.participants.find((p) => p.puuid === puuid)
  if (!player) return false

  const matchesPatch =
    !patch || patch === ds().currentPatch || match.gamePatch === patch

  const matchesQueue =
    !queue || Number(queue) === 0 || match.queueId === Number(queue)

  const matchesChampion =
    !champion ||
    champion === "" ||
    ix().champNameById(player.championId) === champion

  const matchesPlayer =
    !ally || match.participants.some((p) => p.riotIdGameName === ally)

  const matchesRole =
    ignoreRole || !role || role === "ALL" || player.teamPosition === role

  const matchesDate = dateInRange(match.gameEndTimestamp, toValue(date))

  return (
    matchesPatch &&
    matchesQueue &&
    matchesChampion &&
    matchesPlayer &&
    matchesDate &&
    matchesRole
  )
}

export function matchFiltersIgnoreChampion(
  puuid: string,
  match: MatchData,
  options: MatchFilter
) {
  const { ally, ignoreRole = false, date, number, patch, queue, role } = options
  const player = match.participants.find((p) => p.puuid === puuid)

  if (!player) return false

  const matchesPatch =
    !patch || patch === ds().currentPatch || match.gamePatch === patch

  const matchesQueue =
    !queue || Number(queue) === 0 || match.queueId === Number(queue)

  const matchesPlayer =
    !ally || match.participants.some((p) => p.riotIdGameName === ally)

  const matchesRole =
    ignoreRole || !role || role === "ALL" || player.teamPosition === role

  const matchesDate = dateInRange(match.gameEndTimestamp, toValue(date))

  return (
    matchesPatch && matchesQueue && matchesPlayer && matchesDate && matchesRole
  )
}

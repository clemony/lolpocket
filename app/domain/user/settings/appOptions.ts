import type { ButtonProps } from "@nuxt/ui"

export interface SettingOptionSet extends ButtonProps {
  count?: number
  description?: string
  id: string
}

export type SettingOptionKey =
  | "match"
  | "timeline"
  | "championMastery"
  | "summonerMastery"

const settingsData = [
  {
    title: "Reduce Motion",
    description: "Reduce the wobblies."
  },
  {
    title: "Automatic Archiving",
    description:
      "Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update."
  },

  {
    title: "Sidebar Lock",
    description:
      "Upon new patch, current pockets will be archived until updated. A notifica"
  }
]

export const localDataOption = {
  label: "Clear Local Data",
  description: ".",
  text: "Data is cached in your browser's internal database to limit strain on Riot's API servers. This data is not permanent. Most modern browsers automatically clear data as it becomes stale or unused over time."
}

/* This `export const getOptionSet` function is an asynchronous function that returns a Promise of an
array of `SettingOptionSet` objects. */

export const getOptionSet = async (): Promise<SettingOptionSet[]> => {
  const counts = {
    match: await lpdb.matchData.count(),
    timeline: await lpdb.matchTimeline.count(),
    championMastery: await lpdb.playerChampionMastery.count(),
    summonerMastery: await lpdb.summonerMastery.count()
  }
  return [
    {
      count: counts.match,
      description:
        counts.match === 0
          ? "No records."
          : counts.match !== 1
            ? `${counts.match} match records stored.`
            : `${counts.match} match record stored.`,
      label: "Match Data",
      id: "match-data",
      onClick() {
        lpdb.matchData.clear()
      }
    },
    {
      count: counts.timeline,
      description:
        counts.timeline === 0
          ? "No records."
          : counts.timeline !== 1
            ? `${counts.timeline} match timelines`
            : `${counts.timeline} match timeline`,
      label: "Match Timelines",
      id: "match-timelines",
      onClick() {
        lpdb.matchTimeline.clear()
      }
    },
    {
      count: counts.championMastery,
      description:
        counts.championMastery === 0
          ? "No records."
          : counts.championMastery !== 1
            ? `Player records for ${counts.championMastery} champions`
            : `Player records for ${counts.championMastery} champion`,
      label: "Champion Mastery Records",
      id: "champion-mastery-records",
      onClick() {
        lpdb.playerChampionMastery.clear()
      }
    },
    {
      count: counts.summonerMastery,
      description:
        counts.summonerMastery === 0
          ? "No records."
          : counts.summonerMastery !== 1
            ? `Overall data for ${counts.summonerMastery} summoners.`
            : `Overall data for ${counts.summonerMastery} summoner.`,
      label: "Summoner Mastery",
      id: "summoner-mastery",
      onClick() {
        lpdb.summonerMastery.clear()
      }
    }
  ].filter(Boolean)
}

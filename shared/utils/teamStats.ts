import type { MatchStat } from '#shared/types'

export const matchTeams = {
  100: {
    color: 'var(--color-inspiration)',
    name: 'blue',
  },
  200: {
    color: 'var(--color-domination)',
    name: 'red',
  },
}

export const teamStatRegistry: Record<string, MatchStat> = {
  /*   horde: {
    name: "kills",
  },
  riftHerald: {
    name: "",
  },
  dragon: {
    name: "assists",
  },
  elder: {
    name: "",
  },
  baron: {
    name: "",
  },
  tower: {
    name: "",
  },
  inhibitor: {
    name: "",
  }, */
  bans: {
    name: 'Bans',
  },
  gold: {
    name: 'gold earned',
  },
  kda: {
    name: 'kda',
  },
  teamId: {
    name: 'Map Designation',
    group: 'basic',
  },
  win: {
    name: 'Match outcome',
  },
}

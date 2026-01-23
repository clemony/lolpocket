export const matchTeams = {
  100: {
    name: 'blue',
    color: 'var(--color-inspiration)',
  },
  200: {
    name: 'red',
    color: 'var(--color-domination)',
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

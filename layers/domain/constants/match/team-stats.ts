export const matchTeams = {
  100: {
    name: "blue",
    color: "var(--color-inspiration)",
  },
  200: {
    name: "red",
    color: "var(--color-domination)",
  },
}

export const teamStatRegistry: Record<string, MatchStat> = {
  teamId: {
    name: "Map Designation",
    group: "basic",
  },
  win: {
    name: "Match outcome",
  },
  kda: {
    name: "kda",
  },
  gold: {
    name: "gold earned",
  },
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
    name: "Bans",
  },
}

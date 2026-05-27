import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

export const summonerNav = (summoner: Summoner) => {
  const root = buildSummonerRootPath(summoner)

  return [
    {
      icon: "i-history",
      label: "Match History",
      to: root,
      ui: {}
    },
    {
      icon: "i-lp-champ-circle",
      label: "Champions",
      to: `${root}/champions`,
      ui: {
        leadingIcon: "**:stroke-[1.6] "
      }
    },
    {
      icon: "i-folder",
      label: "Pockets",
      to: `${root}/pockets`,
      ui: {}
    },
    {
      icon: "i-activity", //i-bx-play-circle",
      label: "Live",
      to: `${root}/live`,
      slot: "live" as const,
      ui: {}
    }
  ]
}

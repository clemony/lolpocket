import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

export const summonerNav = (summoner: Summoner) => {
  const root = buildSummonerRootPath(summoner)

  return [
    {
      icon: "i-history",
      label: "Match",
      to: root,
      ui: {
        leadingIcon: "[&.fill-icon]:**:stroke-[10%]!"
      }
    },
    {
      icon: "i-lp-champ",
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
      ui: {
        leadingIcon: "[&.fill-icon]:**:fill-nc [&.fill-icon]:scale-90"
      }
    },
    {
      icon: "i-activity", //i-bx-play-circle",
      label: "Live",
      to: `${root}/live`,
      slot: "live" as const,
      ui: {
        leadingIcon: "[&.fill-icon]:**:stroke-[14%]!  [&.fill-icon]:scale-90"
      }
    }
  ]
}

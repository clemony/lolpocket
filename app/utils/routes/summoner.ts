import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
const ui = {
  leadingIcon: "hidden",
  trailingIcon: "text-n5 align-top",
  label: ""
}

export const summonerNav = (summoner: Summoner) => {
  const root = buildSummonerRootPath(summoner)

  return [
    {
      icon: "i-history",
      label: "Match History",
      to: root,
      ui: {
        leadingIcon: " scale-90"
      }
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
      ui: {
        leadingIcon: " scale-90"
      }
    },
    {
      icon: "i-bx-play-circle",
      label: "Live",
      to: `${root}/live`,
      slot: "live" as const,
      ui: {
        leadingIcon: " scale-105"
      }
    }
  ]
}

import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

export const summonerNavHeader = {
  label: "Profile",
  description: "Take a deep dive into your personal summoner data.",
}
export const summonerNav = (summoner: Summoner) => {
  const root = buildSummonerRootPath(summoner)

  return [
    {
      icon: "i-history",
      label: "Match",
      value: "match-item",
      to: root,
      class: "[&.fill-icon]:**:stroke-[10%]!",
    },
    {
      icon: "i-lp-champ",
      label: "Champions",
      value: "champ-item",
      to: `${root}/champions`,
      class: "**:stroke-[1.6] ",
    },
    {
      icon: "i-folder",
      label: "Pockets",
      value: "pocket-item",
      to: `${root}/pockets`,
      class: "[&.fill-icon]:**:fill-nc [&.fill-icon]:scale-90 scale-96",
    },
    {
      icon: "i-activity", //i-bx-play-circle",
      label: "Live",
      to: `${root}/live`,
      value: "live-item",
      slot: "live" as const,
      class: "[&.fill-icon]:**:stroke-[14%]!  [&.fill-icon]:scale-90 scale-96",
    },
  ]
}

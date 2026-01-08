import {
  ChampionAllyStats,
  ChampionItemStats,
  ChampionMatchStats,
  ChampionRuneStats,
  ChampionSkillStats,
  ChampionSpellStats,
  PlayerChampionSummary,
} from "#components"

export const SECTION_IDS = [
  "summary",
  "spells",
  "items",
  "runes",
  "duos",
  "skills",
  "allies",
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export interface ScrollSection {
  id: string
  name: string
  class?: string
  icon?: string
  component?: Component
}
export const summonerSections: ScrollSection[] = [
  {
    id: "summary",
    name: "summary",
    class: "**:stroke-[2]",
    icon: "infinity",
    component: PlayerChampionSummary,
  },
  {
    id: "spells",
    name: "Summoner Spells",
    class: "size-4.5 opacity-80",
    icon: "role:mage",
    component: ChampionSpellStats,
  },
  {
    id: "items",
    name: "items",
    icon: "lol:regen",
    component: ChampionItemStats,
  },
  {
    id: "runes",
    name: "runes",
    class: "size-5! fill-bc active:fill-nc",
    icon: "lol:runes",
    component: ChampionRuneStats,
  },
  {
    id: "skills",
    name: "Abilities",
    icon: "fluent-mdl2:venn-diagram",
    component: ChampionSkillStats,
  },
  {
    id: "duos",
    name: "Synergy & Counters",
    icon: "fluent-mdl2:venn-diagram",
  },
  {
    id: "allies",
    name: "allies",
    class: "size-6",
    icon: "heart-sm-outline",
    component: ChampionAllyStats,
  },
  {
    id: "stats",
    name: "Match Stats",
    class: "size-4.5 **:stroke-[1.8]",
    icon: "tabler:chart-arcs",
    component: ChampionMatchStats,
  },
]

import {
  ChampionAllyStats,
  ChampionItemStats,
  ChampionRuneStats,
  ChampionSkillStats,
  ChampionSpellStats,
  PlayerChampionSummary,
} from "#components"

export interface ScrollSection {
  id: string
  name: string
  class?: string
  icon?: string
  component: Component
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
    name: "spells",
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
    id: "allies",
    name: "allies",
    class: "size-6",
    icon: "heart-sm-outline",
    component: ChampionAllyStats,
  },
  /*   {
    id: 'statsRef',
    name: 'Match Stats',
    class: 'size-4.5 **:stroke-[1.8]',
    icon: 'tabler:chart-arcs'
  component: ,
},
  {
    id: 'duosRef',
    name: 'duos',
    icon: 'fluent-mdl2:venn-diagram',
  component: ,
}, */
]

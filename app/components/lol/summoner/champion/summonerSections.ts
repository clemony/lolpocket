import type { ConcreteComponent } from 'vue'

const ChampionAllyStats = resolveComponent('ChampionAllyStats')
const ChampionItemStats = resolveComponent('ChampionItemStats')
const ChampionMatchStats = resolveComponent('ChampionMatchStats')
const ChampionRuneStats = resolveComponent('ChampionRuneStats')
const ChampionSkillStats = resolveComponent('ChampionSkillStats')
const ChampionSpellStats = resolveComponent('ChampionSpellStats')
const PlayerChampionSummary = resolveComponent('PlayerChampionSummary')

export const SECTION_IDS = [
  'summary',
  'spells',
  'items',
  'runes',
  'duos',
  'skills',
  'allies',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export interface ScrollSection {
  id: string
  name: string
  class?: string
  component?: string | ConcreteComponent
  icon?: string
}
export const summonerSections: ScrollSection[] = [
  {
    id: 'summary',
    name: 'summary',
    class: '**:stroke-[2]',
    component: PlayerChampionSummary,
    icon: 'infinity',
  },
  {
    id: 'spells',
    name: 'Summoner Spells',
    class: 'size-4.5 opacity-80',
    component: ChampionSpellStats,
    icon: 'role:mage',
  },
  {
    id: 'items',
    name: 'items',
    component: ChampionItemStats,
    icon: 'lol:regen',
  },
  {
    id: 'runes',
    name: 'runes',
    class: 'size-5! fill-bc active:fill-nc',
    component: ChampionRuneStats,
    icon: 'lol:runes',
  },
  {
    id: 'skills',
    name: 'Abilities',
    component: ChampionSkillStats,
    icon: 'fluent-mdl2:venn-diagram',
  },
  {
    id: 'duos',
    name: 'Synergy & Counters',
    icon: 'fluent-mdl2:venn-diagram',
  },
  {
    id: 'allies',
    name: 'allies',
    class: 'size-6',
    component: ChampionAllyStats,
    icon: 'heart-sm-outline',
  },
  {
    id: 'stats',
    name: 'Match Stats',
    class: 'size-4.5 **:stroke-[1.8]',
    component: ChampionMatchStats,
    icon: 'tabler:chart-arcs',
  },
]

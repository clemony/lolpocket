import type { ConcreteComponent } from 'vue'

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

export const summonerSections = [
  {
    icon: 'infinity',
    label: 'Summary',
    to: '#summary',
  },
  {
    icon: 'role:mage',
    label: 'Summoner Spells',
    to: '#spells',
  },
  {
    icon: 'lol:regen',
    label: 'Items',
    to: '#items',
  },
  {
    icon: 'lol:runes',
    label: 'Runes',
    to: '#runes',
  },
  {
    icon: 'fluent-mdl2:venn-diagram',
    label: 'Abilities',
    to: '#skills',
  },
  {
    icon: 'fluent-mdl2:venn-diagram',
    label: 'Synergy & Counters',
    to: '#duos',
  },
  {
    icon: 'heart-sm-outline',
    label: 'Allies',
    to: '#allies',
  },
  {
    icon: 'tabler:chart-arcs',
    label: 'Match Stats',
    to: '#stats',
  },
]

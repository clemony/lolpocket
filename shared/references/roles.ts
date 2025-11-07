export interface ChampionRole {
  name: string
  class?: string
  color: string
  icon?: string
}

export const championRoles: ChampionRole[] = [
// mage
  {
    name: 'Artillery',
    color: 'var(--color-onhit)',
  },
  {
    name: 'Burst',
    color: 'var(--color-mr)',
  },
  {
    name: 'Mage',
    color: 'var(--color-sorcery)',
    icon: '',
  },
  //
  {
    name: 'Battlemage',
    color: 'var(--color-mpen)',
    icon: '',
  },
  {
    name: 'Enchanter',
    color: 'var(--color-enchanter)',
    icon: '',
  },
  {
    name: 'Specialist',
    color: 'var(--color-platinum)',
    icon: '',
  },
  /*   {
    name: 'Support',
    color: 'var(--color-inspiration)',
    icon: '',
  }, */

  // ad
  {
    name: 'Assassin',
    class: '!size-4',
    color: 'var(--color-apen)'
  },
  {
    name: 'Marksman',
    class: '!size-4.5 -translate-x-px',
    color: 'var(--color-precision)',
  },
  {
    name: 'Fighter',
    class: '!size-4',
    color: 'var(--color-ad)',
  },
  {
    name: 'Skirmisher',
    color: 'var(--color-fighter)',
    icon: '',
  },
  //
  {
    name: 'Juggernaut',
    color: 'var(--color-vamp)',
    icon: '',
  },
  {
    name: 'Diver',
    color: 'var(--color-iron)',
    icon: '',
  },

  // utility
  {
    name: 'Catcher',
    color: 'var(--color-hp)',
    icon: '',
  },
  {
    name: 'Tank',
    color: 'var(--color-silver)',
    icon: '',
  },
  {
    name: 'Vanguard',
    color: 'var(--color-vanguard)',
    icon: '',
  },
  {
    name: 'Warden',
    color: 'var(--color-warden)',
    icon: '',
  },
]
export interface ChampionRole {
  color: string
  name: string
  class?: string
  icon?: string
}

export const championRoles: ChampionRole[] = [
  // mage
  {
    color: 'var(--color-onhit)',
    name: 'Artillery',
  },
  {
    color: 'var(--color-mr)',
    name: 'Burst',
  },
  {
    color: 'var(--color-sorcery)',
    name: 'Mage',
    icon: '',
  },
  //
  {
    color: 'var(--color-mpen)',
    name: 'Battlemage',
    icon: '',
  },
  {
    color: 'var(--color-enchanter)',
    name: 'Enchanter',
    icon: '',
  },
  {
    color: 'var(--color-platinum)',
    name: 'Specialist',
    icon: '',
  },
  /*   {
    name: 'Support',
    color: 'var(--color-inspiration)',
    icon: '',
  }, */

  // ad
  {
    color: 'var(--color-apen)',
    name: 'Assassin',
    class: '!size-4',
  },
  {
    color: 'var(--color-precision)',
    name: 'Marksman',
    class: '!size-4.5 -translate-x-px',
  },
  {
    color: 'var(--color-ad)',
    name: 'Fighter',
    class: '!size-4',
  },
  {
    color: 'var(--color-fighter)',
    name: 'Skirmisher',
    icon: '',
  },
  //
  {
    color: 'var(--color-vamp)',
    name: 'Juggernaut',
    icon: '',
  },
  {
    color: 'var(--color-iron)',
    name: 'Diver',
    icon: '',
  },

  // utility
  {
    color: 'var(--color-hp)',
    name: 'Catcher',
    icon: '',
  },
  {
    color: 'var(--color-silver)',
    name: 'Tank',
    icon: '',
  },
  {
    color: 'var(--color-vanguard)',
    name: 'Vanguard',
    icon: '',
  },
  {
    color: 'var(--color-warden)',
    name: 'Warden',
    icon: '',
  },
]

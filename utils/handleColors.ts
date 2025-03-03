export function makeGradient(from: string, fromOpacity: number, to: string, toOpacity: number, direction: string) {
  let a = `from-${from}`
  a = fromOpacity ? `${a}/${fromOpacity}` : a

  let b = `to-${to}`
  b = fromOpacity ? `${b}/${toOpacity}` : b

  const c = `bg-gradient-to-${direction}`

  return `${a} ${b} ${c}`
}

export function getColorFromVariable(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable)
}

export const themes = [
  {
    name: 'daylight',
    id: 'theme-daylight',
    icon: 'iconoir:sun-light',
    description: 'If you can smile, you can be the light. —Lux',
    color: 'var(--b1)',
  },
  {
    name: 'dawn',
    id: 'theme-dawn',
    icon: 'marketeq:mountain',
    description: 'The dawn has arrived. The day is upon us. —Leona',
    color: 'var(--b1)',
  },
  {
    name: 'dusk',
    id: 'theme-dusk',
    icon: 'si:sun-set-line',
    description: 'Dusk approaches. Embrace the night. —Diana',
    color: 'var(--b1)',
  },
  {
    name: 'midnight',
    id: 'theme-night',
    icon: 'ph:moon',
    description: '',
    color: 'var(--b1)',
  },
  {
    name: 'spring',
    id: 'theme-spring',
    icon: 'pepicons-pencil:flower',
    description: '',
    color: 'var(--b1)',
  },
  {
    name: 'summer',
    id: 'theme-summer',
    icon: 'carbon:palm-tree',
    description: 'I\'m Yuumi, and you\'re warm! —Cat',
    color: 'var(--b1)',
  },
  {
    name: 'autumn',
    id: 'theme-autumn',
    icon: 'la:leaf',
    description: '',
    color: 'var(--b1)',
  },
  {
    name: 'winter',
    id: 'theme-winter',
    icon: 'clarity:snowflake-line',
    description: '',
    color: 'var(--b1)',
  },
]

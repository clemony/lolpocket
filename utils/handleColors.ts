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
    description: 'Always queues fill. So basic it can pretty much work itself into any team.',
    color: 'var(--b1)',
  },
  {
    name: 'dawn',
    id: 'theme-dawn',
    icon: 'marketeq:mountain',
    description: 'Warm and cozy--just like Yuumi\'s favorite napping spot!',
    color: 'var(--b1)',
  },
  {
    name: 'dusk',
    id: 'theme-dusk',
    icon: 'si:sun-set-line',
    description: 'Gets carried by their Volibear every game and insists they\'re better than you.',
    color: 'var(--b1)',
  },
  {
    name: 'midnight',
    id: 'theme-night',
    icon: 'ph:moon',
    description: 'That guy that otp\'s Zed. Doesn\'t care about their 40% winrate.',
    color: 'var(--b1)',
  },
  {
    name: 'spring',
    id: 'theme-spring',
    icon: '',
    description: '',
    color: 'var(--b1)',
  },
  {
    name: 'summer',
    id: 'theme-summer',
    icon: '',
    description: '',
    color: 'var(--b1)',
  },
  {
    name: 'autumn',
    id: 'theme-autumn',
    icon: '',
    description: '',
    color: 'var(--b1)',
  },
  {
    name: 'winter',
    id: 'theme-winter',
    icon: '',
    description: '',
    color: 'var(--b1)',
  },
]

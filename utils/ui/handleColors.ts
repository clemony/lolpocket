export function getTailwindVar(twVar: string) {
  const styles = getComputedStyle(document.documentElement)
  return styles.getPropertyValue(twVar)
}

export function getTintVariantColor(color, intensity) {
    return `color-mix(in srgb, ${color}, white ${intensity * 100}%)`
}

export function getShadeVariantColor(color, intensity) {
    return `color-mix(in srgb, ${color}, black ${intensity * 100}% )`
}

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
  [
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
      icon: 'ph:mountains',
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
      description: 'The truth lies in darkness. —Zed',
      color: 'var(--b1)',
    },
  ],

  [

    {
      name: 'cloudy',
      id: 'theme-cloudy',
      icon: 'la:leaf',
      description: 'The storm approaches —Janna',
      color: 'var(--b1)',
    },
  ],

  [
    { // icon-park-outline:green-new-energy
      // game-icons:new-shoot
      // lucide:sprout
      // ph:potted-plant
      name: 'spring',
      id: 'theme-spring',
      icon: 'pepicons-pencil:flower',
      description: 'Never look a tulip in the eye... —Lulu',
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
      description: 'See? It\'s just a scarecrow. —Fiddlesticks',
      color: 'var(--b1)',
    },
    {
      name: 'winter',
      id: 'theme-winter',
      icon: 'clarity:snowflake-line',
      description: 'Mother always said: \'Float like iceberg, sting like thrown iceberg!\' —Braum',
      color: 'var(--b1)',
    },
  ],

]

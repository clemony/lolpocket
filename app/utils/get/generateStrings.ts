import { hexoid } from 'hexoid'
import { generate } from 'random-words'

const moreWords = [
  '200 IQ',
  '200 Years',
  'Towers',
  'Minions',
  'Minion Block',
  'Lucker Dog',
  'Dongers',
  'Poggers',
  'Chatbanned',
  'Inting',
  'Clapped',
  'One Trick',
  'Cracked',
  'Diff',
  'Turbo Fed',
  'Skill Issue',
  'Boosted',
  'Jungle Gap',
  'Tilted',
  'Giga Chad',
  'GOATED',
  'GOAT',
  'Gooner',
  'KDA Farmer',
  'Smurf',
  'Auto Filled',
  'Lag Spike',
  'GGEZ',
  'FF15',
  'Nooblord',
  'Big Brain',
  'Omega Tilt',
  'Perma Ban',
  'Hardstuck',
  'Report Mid',
  'Solo Bolo',
  '420 CS',
  'Roam Gap',
  'Mid Gap',
  'Supp Gap',
  'Bot Gap',
  'Top Gap',
  'Team Gap',
  'Vision Score',
  'Outplayed',
  'Gamer Juice',
  'Inting Sion',
  'Solo Q',
  'Clown Fiesta',
  'ARAM Main',
  'Split Pusher',
  'Kite Back',
  'Drag Soul',
  'Baron Steal',
  'Thresh Hook',
  'Outscaled',
  'Rage Quit',
  'Blue Side Diff',
  'Bot Gap',
  'Macro Diff',
  'CSing',
  'Proxy',
  'Power Spike',
  'ADC Diff',
  'Support Gap',
  'Coinflip Match',
  'Dive Fiesta',
  'Reset Meta',
  'Ward Hop',
  'All Chat',
  'Gold Funnel',
  'Roaming Support',
  'Hypercarry',
  'Zoning Ult',
  'Flash Engage',
  'Scaling Comp',
  'Bush Cheese',
  'Ban Phase',
  'Draft Diff',
  'Team Comp',
  'Peel Me',
  'One Combo',
  'Drag Timer',
  'Pink Ward',
  'Tower Dive',
  'Reset City',
]

// Generate a compact date-based key
export function getKey(): string {
  return new Date()
    .toLocaleString()
    .replace(/,\s/g, '')
    .replace(/\s+/g, '')
    .replace(/\//g, '')
    .replace(/:/g, '')
    .trim()
}

// Generate a unique ID using hexoid
export function generateKey(): string {
  return hexoid()()
}

// Capitalize first letter
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Pick a random element from an array
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Strip unwanted words/characters and split into clean words
function cleanName(name: string): string[] {
  return name
    .replace(/\b(the|of)\b/gi, '')
    .replace(/\./g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
}

// Generate random words between given limits
function generateWords(min: number, max: number): string {
  let result = ''
  while (result.length < 4 || result.length > 16) {
    result = generate({ min, max, join: ' ' })
  }
  return capitalize(result)
}

// Shared word generation logic
export function generateName(): string {
  const ix = useIndexStore()
  const championWords = ix.champions.map(item => item.name)

  const itemWords = ix.items.map(item => item.name)

  const leagueWords = [...championWords, ...itemWords, ...moreWords]
  const leagueWord = getRandomElement(leagueWords)

  const generate = generateWords(1, 3)
  let generated: string[] = generate.split(' ')
  generated = generated.map(a => capitalize(a))
  const shuffled = [leagueWord, ...generated].sort(() => Math.random() - 0.5)
  console.log('💠 - generateName - shuffled:', shuffled)

  return capitalize(shuffled.splice(0, 3).join(' '))
}

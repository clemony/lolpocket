import { hexoid } from 'hexoid'
import { generate } from 'random-words'

const moreWords = [
  '😘',
  '👏',
  '👮‍♂️',
  '👩‍🌾',
  '🫶',
  '🤡',
  '👌',
  '💪',
  '🥵',
  '🫠',
  '💦',
  '🪤',
  '⛺️',
  '🦐',
  '😉',
  '200 IQ',
  '200 Years',
  'All Chat',
  'ARAM Main',
  'Auto Filled',
  'Ban Phase',
  'Baron Steal',
  'Big Brain',
  'Blaze It',
  'Blue Side Diff',
  'Boosted',
  'Bot Gap',
  'Bountiful Bobbles',
  'Bush Cheese',
  'Chatbanned',
  'Clapped',
  'Clown Fiesta',
  'Coinflip Match',
  'Cooked',
  'CSing',
  'Cracked',
  'Dive Fiesta',
  'Diff',
  'Drag Soul',
  'Drag Timer',
  'Draft Diff',
  'FF15',
  'Filled',
  'Gamer Juice',
  'GGEZ',
  'Giga Chad',
  'GOAT',
  'GOATED',
  'Gold Funnel',
  'HAM',
  'Hardstuck',
  'Hypercarry',
  'Inting',
  'Inting Sion',
  'Jungle Gap',
  'KDA Farmer',
  'Kite Back',
  'Lag Spike',
  'Lucker Dog',
  'Mid Gap',
  'Minion Block',
  'Minions',
  'Nooblord',
  'Omega Tilt',
  'One Combo',
  'One Trick',
  'Outplayed',
  'Outscaled',
  'Peel Me',
  'Perma Ban',
  'Poggers',
  'Power Spike',
  'Proxy',
  'Rage Quit',
  'Reset City',
  'Reset Meta',
  'Roam Gap',
  'Roaming Support',
  'Scaling Comp',
  'Smurf',
  'Solo Bolo',
  'Solo Q',
  'Split Pusher',
  'Supp Gap',
  'Team Comp',
  'Team Gap',
  'Tilted',
  'Top Gap',
  'Tower Dive',
  'Towers',
  'Turbo Fed',
  'Vision Score',
  'Ward Hop',
  'xD',
  'Zoning Ult',
].sort()

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
  const championWords = ix().champions.map(item => item.name)

  const itemWords = ix().items.map(item => item.name)

  const leagueWords = [...championWords, ...itemWords, ...moreWords]
  const leagueWord = getRandomElement(leagueWords)

  const generate = generateWords(1, 3)
  let generated: string[] = generate.split(' ')
  generated = generated.map(a => capitalize(a))
  const shuffled = [leagueWord, ...generated].sort(() => Math.random() - 0.5)
  console.log('💠 - generateName - shuffled:', shuffled)

  return capitalize(shuffled.splice(0, 3).join(' '))
}

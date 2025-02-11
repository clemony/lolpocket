import { hexoid } from 'hexoid'
import { generate } from 'random-words'

const toID = hexoid()
export function getKey() {
  const newKey = new Date().toLocaleString().replace(/,\s/g, '').replace(/\s+/g, '').replace(/\//g, '').replace(/:/g, '').trim().toString()

  return newKey
}

export function generateKey() {
  const toID = hexoid()
  return toID()
}

export function generateMediumString(): string {
  const championNames = useDataStore().champions.flatMap(champion => cleanName(champion.name))

  const itemNames = useDataStore().items.flatMap(item => cleanName(item.name))

  const moreWords = ['Towers', 'Minions', 'Minion Block', 'Lucker Dog', 'Dongers']

  const leagueWords = championNames.concat(itemNames).concat(moreWords)

  function getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)]
  }
  const leagueWord = getRandomElement(leagueWords)
  const generatedWords = [words()]

  const allWords = [leagueWord, ...generatedWords]

  const shuffledWords = allWords.sort(() => Math.random() - 0.5)

  return shuffledWords.join(' ')
}

function cleanName(name: string): string[] {
  const cleanedName = name
    .replace(/\b(the|of)\b/gi, '')
    .replace(/\./g, '')
    .trim()

  return cleanedName.split(/\s+/).filter(Boolean)
}

function words() {
  let key = ''
  while (key.length < 4 || key.length > 16) {
    key = generate({ min: 1, max: 3, join: ' ' })
  }
  key = key.charAt(0).toUpperCase() + key.slice(1)
  return key
}

export function generateShortString(): string {
  const championNames = useDataStore().champions.flatMap(champion => cleanName(champion.name))

  const itemNames = useDataStore().items.flatMap(item => cleanName(item.name))

  const moreWords = ['Towers', 'Minions', 'Minion Block', 'Lucker Dog', 'Dongers']

  const leagueWords = championNames.concat(itemNames).concat(moreWords)

  function getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)]
  }
  const leagueWord = getRandomElement(leagueWords)
  const generatedWords = [word()]

  const allWords = [leagueWord, ...generatedWords]

  const shuffledWords = allWords.sort(() => Math.random() - 0.5)

  return shuffledWords.join(' ')
}

function word() {
  let key = ''
  while (key.length < 4 || key.length > 16) {
    key = generate({ exactly: 1, join: ' ' })
  }
  key = key.charAt(0).toUpperCase() + key.slice(1)
  return key
}

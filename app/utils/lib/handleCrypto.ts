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

function getRandomElement(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)]
}

const moreWords = ['Towers', 'Minions', 'Minion Block', 'Lucker Dog', 'Dongers', 'Poggers', 'Chatbanned']

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

function word() {
  let key = ''
  while (key.length < 4 || key.length > 16) {
    key = generate({ exactly: 1, join: ' ' })
  }
  key = key.charAt(0).toUpperCase() + key.slice(1)
  return key
}

export async function generateMediumString(): Promise<string> {
  const championNames = useDataStore().champions.flatMap(champion => cleanName(champion.name))

  const { data: itemData } = await useFetch('/api/items/index.json')
  const items = Object.values(itemData.value) as ItemIndex[]

  const itemNames = items.flatMap(item => item.name)

  const leagueWords = championNames.concat(itemNames).concat(moreWords)

  const leagueWord = getRandomElement(leagueWords)
  const generatedWords = [words()]

  const allWords = [leagueWord, ...generatedWords]

  const shuffledWords = allWords.sort(() => Math.random() - 0.5)

  return shuffledWords.join(' ')
}

export async function generateShortString(): Promise<string> {
  const championNames = useDataStore().champions.flatMap(champion => cleanName(champion.name))

  const { data: itemData } = await useFetch('/api/items/index.json')
  const items = Object.values(itemData.value) as ItemIndex[]

  const itemNames = items.flatMap(item => item.name)

  const leagueWords = championNames.concat(itemNames).concat(moreWords)

  const leagueWord = getRandomElement(leagueWords)
  const generatedWords = [word()]

  const allWords = [leagueWord, ...generatedWords]

  const shuffledWords = allWords.sort(() => Math.random() - 0.5)

  return shuffledWords.join(' ')
}

import { generate, count } from 'random-words'
import { useDataStore } from '@stores/dataStore'

function word() {
    let key = ''
    while (key.length < 4 || key.length > 16) {
        key = generate({ exactly: 1, join: ' ' })
    }
    key = key.charAt(0).toUpperCase() + key.slice(1)
    return key
}

function words() {
    let key = ''
    while (key.length < 4 || key.length > 16) {
        key = generate({ min: 1, max: 3, join: ' ' })
    }
    key = key.charAt(0).toUpperCase() + key.slice(1)
    return key
}

function cleanName(name: string): string[] {
    const cleanedName = name
        .replace(/\b(the|of)\b/gi, '')
        .replace(/[.]/g, '')
        .trim()

    return cleanedName.split(/\s+/).filter(Boolean)
}

export function generateRandomString(): string {
    const ds = useDataStore()
    const championNames = ds.champions.flatMap((champion) =>
        cleanName(champion.name)
    )

    const itemNames = ds.items.flatMap((item) => cleanName(item.name))

    const moreWords = [
        'Towers',
        'Minions',
        'Minion Block',
        'Lucker Dog',
        'Dongers',
    ]

    const leagueWords = championNames
        .concat(itemNames)
        .concat(ds.uniqueClass)
        .concat(moreWords)

    function getRandomElement(array: string[]): string {
        return array[Math.floor(Math.random() * array.length)]
    }
    const leagueWord = getRandomElement(leagueWords)
    const generatedWords = [word()]

    const allWords = [leagueWord, ...generatedWords]

    const shuffledWords = allWords.sort(() => Math.random() - 0.5)

    return shuffledWords.join(' ')
}

export function generateRandomName(): string {
    const ds = useDataStore()
    const championNames = ds.champions.flatMap((champion) =>
        cleanName(champion.name)
    )

    const itemNames = ds.items.flatMap((item) => cleanName(item.name))

    const moreWords = [
        'Towers',
        'Minions',
        'Minion Block',
        'Lucker Dog',
        'Dongers',
    ]

    const leagueWords = championNames
        .concat(itemNames)
        .concat(ds.uniqueClass)
        .concat(moreWords)

    function getRandomElement(array: string[]): string {
        return array[Math.floor(Math.random() * array.length)]
    }
    const leagueWord = getRandomElement(leagueWords)
    const generatedWords = [words()]

    const allWords = [leagueWord, ...generatedWords]

    const shuffledWords = allWords.sort(() => Math.random() - 0.5)

    return shuffledWords.join(' ')
}

export function getKey() {
    const newKey = new Date()
        .toLocaleString()
        .replace(/,\s/g, '')
        .replace(/\s+/g, '')
        .replace(/\//g, '')
        .replace(/\:/g, '')
        .trim()
        .toString()

    return newKey
}

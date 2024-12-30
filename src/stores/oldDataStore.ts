import { Path } from '@/types/dataTypes'
import { DataObject, Shard } from '../types/pocketTypes'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Champion, Item, Rune } from '@/types/dataTypes'
// Define types for the JSON data

export const useDataStore = defineStore('dataStore', () => {
    const runes = ref<Rune[]>([])
    const champions = ref<Champion[]>([])
    const selectedChampion = ref<Champion | null>(null)
    const items = ref<Item[]>([])
    const shards = ref<Shard[]>([])

    const paths = ref<Path[]>([])

    function setSelectedChampion(champion: Champion) {
        selectedChampion.value = champion
    }

    function getRunes() {
        return runes.value
    }
    function getItems() {
        return items.value
    }

    function getShards() {
        return shards.value
    }

    const uniqueClass = computed(() => {
        const classes = champions.value.flatMap((c) => c.tags)
        return Array.from(new Set(classes)) // Create an array with only unique paths
    })

    const roles = [
        'Small Tomato',
        'Mid',
        'Top',
        'Jungle',
        'Bot',
        'Support',
        'Enchanter',
        'Catcher',
        'Burst',
        'DPS',
    ]

    function parseAbilityString(abilityString: string): {
        name: string
        context: string
        data: Record<string, string>
    } {
        if (typeof abilityString !== 'string') {
            return { name: '', context: '', data: {} }
        }

        const lines = abilityString
            .split('\n')
            .filter((line) => line.trim() !== '')

        if (lines.length) {
            const name = lines[0].trim()
            let text = lines.slice(1).join('\n').trim()

            // Initialize categories
            const data: Record<string, string> = {}

            // Extract and remove specific lines from context
            const dataPrefixes = [
                'COST:',
                'COOLDOWN:',
                'STATIC COOLDOWN:',
                'RECHARGE:',
                'RANGE:',
                'WIDTH:',
                'SPEED:',
                'CAST TIME:',
                'TARGET RANGE:',
                'EFFECT RADIUS:',
                'TETHER RADIUS:',
                'COLLISION RADIUS:',
                'TARGET IMMUNITY:',
                'ANGLE:',
            ]

            // Separate lines into categories and context
            const contextLines: string[] = []

            lines.slice(1).forEach((line) => {
                const trimmedLine = line.trim()
                let categorized = false

                dataPrefixes.forEach((prefix) => {
                    if (trimmedLine.startsWith(prefix)) {
                        data[prefix] = trimmedLine
                            .substring(prefix.length)
                            .trim()
                        categorized = true
                    }
                })

                if (!categorized) {
                    contextLines.push(trimmedLine)
                }
            })

            const context = contextLines
                .join('\n')
                .trim()
                .replace('Innate:', '')
                .replace('Active:', '')
                .replace('Innate -', '')
                .replace('Active -', '')
                .replace('Passive:', '')
                .trim()

            return { name, context, data }
        }

        return { name: '', context: '', data: {} }
    }

    /*    fetchBlankRunes()
        } */

    /*     const fetchBlankRunes = async () => {
        try {
            const response = await fetch('/api/blankRunes.json')
            if (!response.ok) {
                throw new Error(
                    `Network response was not ok: ${response.statusText}`
                )
            }

            const contentType = response.headers.get('content-type')
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError('Received non-JSON response')
            }

            const json: DataObject[] = await response.json()

            json.forEach((object: DataObject) => {
                if (object.type === 'rune') {
                    runes.value.push(object as Rune)
                }
            })
        } catch (error) {
            console.error('Failed to fetch data:', error)
        }
    } */

    return {
        runes,
        champions,
        items,
        getItems,
        selectedChampion,
        setSelectedChampion,
        getRunes,
        uniqueClass,
        shards,
        getShards,
        roles,

        paths,
    }
})

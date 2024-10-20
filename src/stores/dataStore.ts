import { Champion, DataObject, Item, Rune, Shard } from '../../types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// Define types for the JSON data

export const useDataStore = defineStore('dataStore', () => {
    const runes = ref<Rune[]>([])
    const champions = ref<Champion[]>([])
    const selectedChampion = ref<Champion | null>(null)
    const items = ref<Item[]>([])
    const shards = ref<Shard[]>([])

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

    // Use a computed property to extract unique paths from the runes array
    const uniqueCats = computed(() => {
        const cat = items.value.map((item) =>
            item.cat
                .replace(' item', '')
                .replace('Potions and ', '')
                .replace(/s$/, '')
                .trim()
        )
        return Array.from(new Set(cat)) // Create an array with only unique paths
    })

    // Use a computed property to extract unique paths from the runes array
    const uniquePaths = computed(() => {
        const paths = runes.value.map((rune) => rune.path)
        return Array.from(new Set(paths)) // Create an array with only unique paths
    })

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

    const typeOptions = [...uniqueClass.value, ...roles] // Spread both arrays to concatenate

    const transformItemData = (data: any): Item => {
        return {
            name: data.name,
            img: data.img,
            wiki: data.wiki,
            buy: data.buy,
            sell: data.sell,
            passive:
                data.passive
                    ?.toString()
                    .replace(/(Unique.*?:)+/g, '\n<b>$1</b>&nbsp;')
                    .trim() || '',
            active:
                data.active
                    ?.toString()
                    .replace(/(Unique.*?:)+/g, '\n<b>$1</b>&nbsp;')
                    .trim() || '',
            cat: data.tier,
            stats: data.stats?.toString().replace(/\+/g, '').trim() || '', // Safely handle undefined and provide fallback
            type: data.type,
            id: data.id,
            count: 0,
        }
    }

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

        if (lines.length > 0) {
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

    function transformChampionData(data: any): Champion {
        return {
            name: data.name,
            img: data.img,
            wiki: data.wiki,
            title: data.title,
            tags:
                typeof data.tags === 'string' ?
                    data.tags.split(',').map((tag) => tag.trim())
                :   data.tags || [],
            type: data.type,
            abilities: {
                passive: {
                    key: 'P',
                    ...parseAbilityString(data.passive),
                    img: data.pImg,
                },
                q: {
                    key: 'Q',
                    ...parseAbilityString(data.q),
                    img: data.qImg,
                },
                w: {
                    key: 'W',
                    ...parseAbilityString(data.w),
                    img: data.wImg,
                },
                e: {
                    key: 'E',
                    ...parseAbilityString(data.e),
                    img: data.eImg,
                },
                r: {
                    key: 'R',
                    ...parseAbilityString(data.r),
                    img: data.rImg,
                },
            },
            items: [],
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch('/patchData/14.15.1.json')
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
                } else if (object.type === 'champion') {
                    const transformedChampion = transformChampionData(object)

                    champions.value.push(transformedChampion)
                } else if (object.type === 'item') {
                    const transformedItem = transformItemData(object)
                    items.value.push(transformedItem)
                    //items.value.push(object as Item);
                } else if (object.type === 'shard') {
                    shards.value.push(object as Shard)
                }
            })
        } catch (error) {
            console.error('Failed to fetch data:', error)
        }
    }

    return {
        runes,
        champions,
        items,
        getItems,
        fetchData,
        selectedChampion,
        setSelectedChampion,
        getRunes,
        uniqueCats,
        uniquePaths,
        uniqueClass,
        shards,
        getShards,
        roles,
        typeOptions,
    }
})

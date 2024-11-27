import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useDataStore } from './dataStore'
import { Champion, Item } from '../../types'
import { usePocketStore } from './pocketStore'

export const useChampStore = defineStore(
    'champStore',
    () => {
        const ds = useDataStore()
        const ps = usePocketStore()

        const champions = computed(() => ds.champions)

        const selectedChampion = ref('')
        const champSearch = ref('')
        const favoriteChamps = ref<Champion[]>([])
const classFilters = ref([])
const sortAZ = ref()
const viewFavorites = ref()


        const champTabs = ref('abilities')

        //------------------------------------------ITEMS MAP

        const championItemsMap = ref<Record<string, Item[]>>({})

        function addToSet(item: Item, champName: string) {
            if (!championItemsMap.value[champName]) {
                championItemsMap.value[champName] = []
            }

            championItemsMap.value[champName].push(item)
            console.log(
                'Items for',
                champName,
                ':',
                championItemsMap.value[champName]
            )
        }

        function getChampionItems(champName: string) {
            return championItemsMap.value[champName] || []
        }

        function removeFromSet(item: Item, champName: string) {
            // Ensure the champion exists in the map
            if (championItemsMap.value[champName]) {
                // Find the index of the item to be removed
                const index = championItemsMap.value[champName].findIndex(
                    (i) => i.name === item.name
                )

                // If the item exists, remove it
                if (index !== -1) {
                    championItemsMap.value[champName].splice(index, 1)
                    console.log('Removed item:', item.name, 'from', champName)
                } else {
                    console.log('Item not found:', item.name, 'for', champName)
                }
            } else {
                console.log('Champion not found:', champName)
            }
        }



        function removeChamp(champ, pocket) {
            const find = pocket.champions[0].champions.findIndex(
                (champion) => champion.name == champ
            )

            if (find && find! - -1) {
                pocket.champions[0].champions.splice(find, 1)
            }
        }

        return {
            selectedChampion,
            champions, 
            favoriteChamps,
            classFilters,
            removeChamp,
            champSearch,
            addToSet,
            getChampionItems,
            removeFromSet,
            championItemsMap,
            champTabs,
            sortAZ,
            viewFavorites
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'champStore',
        },
    }
)

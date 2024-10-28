import { defineStore } from 'pinia'
import {
    DefaultItem,
    Item,
    pocket,
    pocketChampions,
    pocketItems,
    pocketRunes,
} from './../../types'
import { generateRandomString } from '../utils/keygen'
import { useItemStore } from './itemStore'
import { useRuneStore } from './runeStore'
import { hexoid } from 'hexoid'

export const usePocketStore = defineStore(
    'pocketStore',
    () => {
        const pockets = ref<pocket[]>([])
        const trashPockets = ref<pocket[]>([])
        const archivePockets = ref<pocket[]>([])
        const pinnedRows = ref<pocket[]>([])
        const router = useRouter()
        const filterText = ref('')
        const patch = '14.19'
        const selectedRows = ref([])
        const tableSelectAll = ref()
        const pocketApi = shallowRef()

        function updateSelectedRows(rows) {
            selectedRows.value = rows // Update the selected rows in the store
        }

/* const resetComponents = () => {
    pockets.value.forEach((pocket) => {
        pocket.component = null; // or set to a default value if needed
    });
};
resetComponents() */

console.log(router)
        // Filter for pinned pockets
        const pinnedTopRowData = computed(() => {
            return pockets.value.filter((pocket) => pocket.pinned)
        })

        // Filter for non-pinned pockets
        const rowData = computed(() => {
            return pockets.value.filter((pocket) => !pocket.pinned)
        })

        const toID = hexoid()

        function createDateObject() {
            const now = new Date()
            const patch = '14.19'
            const formattedDate = now.toLocaleDateString('en-US', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
            })

            let formattedTime = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            })

            if (formattedTime.startsWith('0')) {
                formattedTime = formattedTime.slice(1)
            }

            return {
                date: formattedDate,
                time: formattedTime,
                patch: patch,
            }
        }

        function addPocket(
            name: string,
            type: string,
            icon: string,
            bgColor: string,
            iconColor: string
        ) {
            const aKey = toID()

            const pocketChampionsValue: pocketChampions = {
                key: aKey,
                champions: [],
                starred: '',
            }

            function createDefaultItem(): DefaultItem {
                return {
                    name: '',
                    img: '',
                    buy: 0,
                    sell: 0,
                    stats: '',
                    passive: '',
                    active: '',
                    type: '',
                    cat: '',
                    wiki: '',
                    id: 0,
                    count: 0,
                }
            }

            const pocketItemsValue: pocketItems = {
                key: aKey,
                itemSets: [],
                starred: 0,
                alts: {
                    alt1: [createDefaultItem()],
                    alt2: [createDefaultItem()],
                    alt3: [createDefaultItem()],
                    alt4: [createDefaultItem()],
                    alt5: [createDefaultItem()],
                    alt6: [createDefaultItem()],
                },
            }

            const pocketRunesValue: pocketRunes = {
                key: aKey,
                runeSets: [],
                starred: 0,
                selected: 0,
            }

            // Create the new pocket
            const newPocket: pocket = {
                name: name || generateRandomString(),
                type: type || '',
                pinned: false,
                key: aKey,
                icon: icon || 'teenyicons:folder-outline',
                bgColor: bgColor || '#000',
                iconColor: iconColor || '#FFF',
                champions: [pocketChampionsValue],
                items: [pocketItemsValue],
                runes: [pocketRunesValue],
                notes: '',
                dateCreated: [createDateObject()],
                dateUpdated: [createDateObject()],
                component: null,
            }

            // Initialize other stores here instead of top-level
            const is = useItemStore()
            const rs = useRuneStore()

            pockets.value.push(newPocket)
            is.newSet(newPocket.key)
            rs.newRuneSet(newPocket.key)
            console.log('pinia pocket added')
        }

        function getPocket(key) {
            return pockets.value.find((pocket: pocket) => pocket.key === key)
        }

        function deletePocket(key: string) {
            const index = pockets.value.findIndex((set) => set.key === key)
            const pocket = getPocket(key)

            if (index !== -1 && pocket) {
                if (pocket.pinned == true) {
                    pocket.pinned = false
                }
                trashPockets.value.push(pocket)
                pockets.value.splice(index, 1)
            }
        }

        const updatePocketType = (key: string, newType: string) => {
            const findPocket = pockets.value.find(
                (pocket) => pocket.key === key
            )
            if (findPocket) {
                findPocket.type = newType
            }
        }

        function updateGrid() {
            pocketApi.value.setGridOption('pinnedTopRowData', pinnedTopRowData)
            pocketApi.value.setGridOption('rowData', rowData)
        }

        function deepCopy<T>(obj: T): T {
            return JSON.parse(JSON.stringify(obj))
        }

        function duplicatePocket(original: pocket): pocket {
            const newPocket = deepCopy(original)

            newPocket.key = toID()
            newPocket.name = `${original.name} (copy)`
            newPocket.dateCreated = [createDateObject()]
            newPocket.dateUpdated = [createDateObject()]

            pockets.value.push(newPocket)
            return newPocket
        }

        const refs = ref({}) //for date scroll

       
        return {
            refs,
            pockets,
            filterText,
            updateGrid,
            deletePocket,
            patch,
            pinnedTopRowData,
            archivePockets,
            rowData,
            addPocket,
            getPocket,
            pinnedRows,
            trashPockets,
            //navigateToPocket,
            updatePocketType,
            selectedRows,
            tableSelectAll,
            updateSelectedRows,
            duplicatePocket,
            pocketApi,
        }
    },

    {
        persist: {
            storage: localStorage,
            key: 'pocketStore',
            pick: ['pockets', 'trashPockets', 'pinnedRows', 'showSidebar'],
        },
    }
)

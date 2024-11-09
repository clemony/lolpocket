import { defineStore } from 'pinia'
import { pocket } from './../../types'
import {
    createDateObject,
    createGridHeader,
} from '@lib/functions/CreateDefault'

export const usePocketStore = defineStore(
    'pocketStore',
    () => {
        const pockets = ref<pocket[]>([])
        const trashPockets = ref<pocket[]>([])
        const archivePockets = ref<pocket[]>([])
        const pinnedRows = ref<pocket[]>([])

        const filterText = ref('')
        const patch = '14.19'

        const selectedRows = ref([])
        const tableSelectAll = ref()
        const pocketApi = shallowRef()
        const pinnedApi = shallowRef()
        const pinnedGrid = shallowRef()
        const pocketGrid = shallowRef()

        function updateSelectedRows(rows) {
            selectedRows.value = rows // Update the selected rows in the store
        }

        const pinned = computed(() => {
            return pockets.value.filter((pocket) => pocket.pinned)
        })
        const general = computed(() => {
            return pockets.value.filter((pocket) => !pocket.pinned)
        })

        const pinnedRowData = computed(() => {
            const p = [...pinned.value]
            // const create = createGridHeader(false)
            return p //.push(create)
        })

        // Filter for non-pinned pockets
        const rowData = computed(() => {
            const p = [...general.value]
            //  const create = createGridHeader(false)
            return p //.push(create)
        })

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

        const updatePocketType = (key: string, newTags: Array<string>) => {
            const findPocket = pockets.value.find(
                (pocket) => pocket.key === key
            )
            if (findPocket) {
                findPocket.tags = newTags
            }
        }

        function updateGrid() {
            pocketApi.value.setGridOption('pinnedTopRowData', pinnedRowData)
            pocketApi.value.setGridOption('rowData', rowData)
        }

        return {
            pockets,
            filterText,
            updateGrid,
            deletePocket,
            patch,
            pinnedRowData,
            archivePockets,
            rowData,
            getPocket,
            pinnedRows,
            trashPockets,
            updatePocketType,
            selectedRows,
            tableSelectAll,
            updateSelectedRows,
            pocketApi,
            pinnedApi,
            pocketGrid,
            pinnedGrid,
            pinned,
            general,
        }
    },

    {
        persist: {
            storage: localStorage,
            key: 'pocketStore',
        },
    }
)

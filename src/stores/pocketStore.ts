import { defineStore } from 'pinia'
import { pocket } from '../../types'

export const usePocketStore = defineStore(
    'pocketStore',
    () => {
        const pockets = ref<pocket[]>([])
        const trashPockets = ref<pocket[]>([])
        const archivePockets = ref<pocket[]>([])

        const filterText = ref('')
        const patch = '14.19'

        const selectedRows = ref([])
        const tableSelectAll = ref()
        const pocketApi = shallowRef()
        const pinnedApi = shallowRef()
        const headerApi = shallowRef()
        const pinnedGrid = shallowRef()
        const pocketGrid = shallowRef()
        const columns = ref([])

        function updateSelectedRows(rows) {
            selectedRows.value = rows // Update the selected rows in the store
        }

        const pinned = computed(() => {
            return pockets.value.filter((pocket) => pocket.pinned)
        })
        const general = computed(() => {
            return pockets.value.filter((pocket) => !pocket.pinned)
        })

        const updatePocketType = (key: string, newTags: Array<string>) => {
            const findPocket = pockets.value.find(
                (pocket) => pocket.key === key
            )
            if (findPocket) {
                findPocket.taas =newTags
            }
        }

        return {
            pockets,
            filterText,
            patch,
            archivePockets,
            trashPockets,
            updatePocketType,
            selectedRows,
            tableSelectAll,
            updateSelectedRows,
            pocketApi,
            pinnedApi,
            headerApi,
            pocketGrid,
            pinnedGrid,
            pinned,
            general,
            columns,
        }
    },

    {
        persist: {
            storage: localStorage,
            key: 'pocketStore',
        },
    }
)
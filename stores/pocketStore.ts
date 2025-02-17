import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<pocket[]>([])
    const trashFolder = ref<pocket[]>([])
    const archiveFolder = ref<pocket[]>([])
    const pinnedFolder = ref<pocket[]>([])

    const champions = ref(null)
    const items = ref(null)
    const runes = ref(null)
    const complete = ref(null)

    const championsBtn = ref(null)
    const itemsBtn = ref(null)
    const runesBtn = ref(null)
    const completeBtn = ref(null)
    const pocketComponents = [
      {

        compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Champions.vue'))),
        hoverRef: champions,
        btnRef: championsBtn,
        icon: '',
        title: 'Champions',
      },
      {
        compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Items.vue'))),
        hoverRef: items,
        btnRef: itemsBtn,
        icon: 'bow',
        title: 'Items',
      },
      {

        compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Runes.vue'))),
        hoverRef: runes,
        btnRef: runesBtn,
        icon: '',
        title: 'Runes',
      },
      {

        compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Complete.vue'))),
        hoverRef: complete,
        btnRef: completeBtn,
        icon: 'stash:infinity-solid',
        title: 'Complete Build',
      },
    ]

    const hoverStates = pocketComponents.map(el => ({
      ref: el.ref,
      btnRef: el.btnRef,
      title: el.title,
      isHovered: useElementHover(el.hoverRef),
      isBtnHovered: useElementHover(el.btnRef),
    }))

    const activePocketComponent = shallowRef(pocketComponents[0].compRef)

    const filterText = ref('')
    const selectedRows = ref([])
    const tableSelectAll = ref()
    const pocketGridApi = shallowRef<GridApi | null>(null)

    const pinnedTopRowData = ref([])
    const pocketGrid = shallowRef()
    const columns = ref([])

    function updateSelectedRows(rows: any) {
      selectedRows.value = rows // Update the selected rows in the store
    }

    const allPockets = computed(() => {
      return pockets.value
    })

    const updatePocketType = (key: string, newTags: Array<string>) => {
      const findPocket = pockets.value.find(pocket => pocket.key === key)
      if (findPocket) {
        findPocket.tags = newTags
      }
    }

    return {
      activePocketComponent,
      pockets,
      filterText,
      archiveFolder,
      trashFolder,
      updatePocketType,
      selectedRows,
      tableSelectAll,
      updateSelectedRows,
      pocketGridApi,
      pocketGrid,
      pinnedTopRowData,
      pinnedFolder,
      allPockets,
      columns,
    }
  },

  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'pocketStore',
    },
  },
)

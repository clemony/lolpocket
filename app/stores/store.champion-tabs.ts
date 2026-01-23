import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

interface ChampionTab {
  championKey: string
}

export const useChampionTabStore = defineStore(
  'champion-tabs',
  () => {
    const route = useRoute()
    const router = useRouter()

    // Persisted, serializable
    const tabs = ref<ChampionTab[]>([])

    // --- actions ---

    function openTab(championKey: string) {
      if (!tabs.value.some(t => t.championKey === championKey)) {
        tabs.value.push({ championKey })
      }
    }

    function closeTab(championKey: string) {
      tabs.value = tabs.value.filter(t => t.championKey !== championKey)
    }

    function clearTabs() {
      tabs.value = []
    }

    // --- derived routes (NOT persisted) ---
    const championRoutes = computed(() => {
      const region = route.params.region
      const slug = route.params.slug

      if (!region || !slug)
        return []

      return tabs.value.map(tab =>
        router.resolve({
          name: 'summoner-region-slug-champion_key',
          params: {
            champion_key: tab.championKey,
            region,
            slug,
          },
        })
      )
    })

    // --- auto-clear on summoner change ---
    watch(
      () => route.params.slug,
      (newSlug, oldSlug) => {
        if (newSlug !== oldSlug) {
          clearTabs()
        }
      }
    )

    return {
      championRoutes,
      clearTabs,
      closeTab,
      openTab,
      tabs,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)

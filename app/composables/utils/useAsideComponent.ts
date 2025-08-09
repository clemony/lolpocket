// composables/useAsideComponent.ts
import { MatchHistoryPageAside, ProfileSettingsAside } from '#components'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useAsideComponent() {
  const route = useRoute()

  const asideMap = {
    'summoner-history': MatchHistoryPageAside,
    'summoner-settings': ProfileSettingsAside,
  }

  return computed(() => asideMap[route.name as string] ?? null)
}
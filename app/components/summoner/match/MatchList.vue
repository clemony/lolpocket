<script lang="ts" setup>
import { TreeItem, TreeRoot, TreeVirtualizer } from 'reka-ui'

const { summoner, puuid } = defineProps<{
  summoner: Summoner
  puuid: string
}>()

const fullMatches = computed(() => summoner.matches.full)
const ms = useMatchStore()

const { filteredMatches } = useFilteredMatches(puuid, ms.mf, fullMatches)

const safeFilteredMatches = computed(() => filteredMatches.value ?? [])
console.log("💠 - safeFilteredMatches:", safeFilteredMatches)

const matches = computedAsync(async () => {
  return safeFilteredMatches.value.map((m, index) => ({
    ...m,
    id: String(m.metadata?.matchId || m.info?.gameId || `fallback-${index}`),
  }))
}, [])
console.log("💠 - matches - matches:", matches)
</script>

<template>
  <TreeRoot
    :items="matches"
    :get-key="item => item.id"
    class="h-[500px] overflow-auto border"
  >
    <TreeVirtualizer :estimate-size="50" v-slot="{ virtualItem }">
      <TreeItem :value="virtualItem" :level="1" as-child>
        <div class="p-4 border-b bg-white hover:bg-gray-50">
          {{ virtualItem }}
          {{ console.log("💠 - virtualItem:", virtualItem) }}
        </div>
      </TreeItem>
    </TreeVirtualizer>
  </TreeRoot>


</template>
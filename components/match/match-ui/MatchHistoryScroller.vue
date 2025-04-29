<script lang="ts" setup>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const matches = computed(() => summoner.matches)
const { filteredMatches } = useFilteredMatches(matches, summoner.puuid)

const safeFilteredMatches = computed(() => filteredMatches.value ?? [])

const { loading } = useSummoner(summoner.puuid)

const virtualMatches = computedAsync(async () => {
  return safeFilteredMatches.value.map((m, index) => ({
    ...m,
    id: m.metadata?.matchId || m.info?.gameId || `fallback-${index}`,
  }))
}, [])
</script>

<template>
  <div class="w-full h-full overflow-y-auto no-scrollbar">
    <!-- Show skeletons while loading -->
    <div v-if="loading" class="flex flex-col gap-6 pt-27">
      <LazyMatchCardSkeleton v-for="i in 20" :key="i" />
    </div>

    <!-- Show virtual scroller when data is ready -->

    <DynamicScroller
      v-else-if="filteredMatches.length > 0"
      :items="virtualMatches"
      key-field="id"
      class="pt-27"
      :min-item-size="140">
      <template #default="{ item, index }">
        <DynamicScrollerItem :item="item" :index="index" :active="true">
          <LazyMatchCard :match="item" />
        </DynamicScrollerItem>
      </template>

      <template #after>
        <div class="h-150 w-220 grid justify-center py-14">
          <GetOldMatchesButton :summoner="summoner" :loading="loading" />
        </div>
      </template>
    </DynamicScroller>

        <div v-else-if="!loading && !filteredMatches.length" class="grid place-items-center w-220 pt-57 h-54 font-medium">
          No matches found with these filters.
        </div>
  </div>
</template>

<script lang="ts" setup>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const props = defineProps<{
  matchData: any
  puuid: string
}>()

const {
  matchData,
  loading,
} = useMatchData(props.puuid)

const { dataReady, filteredMatches } = useFilteredMatches(matchData)

const virtualMatches = computed(() =>
  filteredMatches.value.map((m, index) => ({
    ...m,
    id: m.metadata?.matchId || m.info?.gameId || `fallback-${index}`,
  })),
)


</script>

<template>
  <div class="w-full h-full overflow-y-auto no-scrollbar">
    <!-- Show skeletons while loading -->
    <div v-if="loading || !dataReady" class="flex flex-col gap-6">
      <LazyMatchCardSkeleton v-for="i in 20" :key="i" />
    </div>

    <!-- Show virtual scroller when data is ready -->
     
    <DynamicScroller
      v-else
      :items="virtualMatches"
      key-field="id"
      class="  pt-24 "
      :min-item-size="140">
      <template #default="{ item, index }">
        <DynamicScrollerItem :item="item" :index="index"  :active="true">
          <LazyMatchCard :match="item" />
        </DynamicScrollerItem>
      </template>

      <template #after>
        <div class="h-200 grid justify-center py-14">
         <GetOldMatchesButton  :puuid="puuid"  :loading="loading"  />
        </div>
      </template>
    </DynamicScroller>
  </div>
</template>

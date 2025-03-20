<script lang="ts" setup>
const props = defineProps<{
  patchGames: any
}>()
const ans = useAnalysisStore()
const ds = useDataStore()
const patchGames = computed (() => {
  return ans.patchGames
})

const items = computedAsync (() => {
  return usePatchItems()
})
console.log('💠 - items - items:', items)

const mvi = computed(() => {
  if (!patchGames.value.length || !items.value)
    return null
  return items.value.value.slice(0, 1) || null
})

const item = computed(() => {
  if (!mvi.value || !mvi.value[0] || !patchGames.value)
    return null
  return ds.SRitems.find(i => i.id == mvi.value[0].item) || null
})
</script>

<template>
  <div v-if="item && item.id && mvi" class="stats min-h-101 hover:grayscale-0 transition dr-50 rounded-box border border-b3/90  bg-b1  stats-vertical  shadow-warm-soft h-full py-4 px-5">
    <div class="stat-title text-2 font-medium">
      Pocket Pick
    </div>
    <div class="avatar online shadow-warm-2 rounded-full size-16">
      <div class="size-16 rounded-full">
        <img :src="`/img/item/${item.id}.webp`" class="" />
      </div>
    </div>

    <div class="stat-title text-bc tracking-tight text-4 font-semibold">
      {{ item.name }}
    </div>

    <div class="dst text-2 stat-desc items-center">
      <p class="flex items-end">
        <span class="text-7 font-bold text-bc">{{ mvi[0].winrate.toFixed(2) }}</span><icon name="ph:percent-bold" class="size-5" /> <span class="mb-px"> Overall</span>
      </p>
      <p class="mt-2">
        {{ mvi[0].bayesianWinrate.toFixed(2) }}% <tippy>Adjusted</tippy>
      </p>
    </div>

    <NoDataOverlay v-if="!props.patchGames.length" />
  </div>
</template>
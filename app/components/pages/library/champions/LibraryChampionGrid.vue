<script lang="ts" setup>
const { winrates: wr } = defineProps<{
  winrates?: ChampionWinrate[]
}>()

const winrates = computed(() => wr)
</script>

<template>
  <div
    v-auto-animate
    class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-between gap-4 pt-3">
    <div
      v-for="item in champFilter().filtered"
      :key="item"
      class="flex size-20 grow items-center justify-center">
      <Champion :k="item" :ui="{ root: 'size-20' }">
        <template v-if="winrates" #content>
          <LazyChampionWinrateTooltip
            hydrate-on-interaction
            :k="item"
            :winrates="
              winrates?.filter((w) => w.champion === champNameByKey(item))
            " />
        </template>
      </Champion>
    </div>
  </div>
</template>

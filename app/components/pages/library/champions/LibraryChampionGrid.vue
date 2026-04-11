<script lang="ts" setup>
const { winrates: wr } = defineProps<{
  winrates?: ChampionWinrate[]
}>()

const winrates = computed(() => wr)
</script>

<template>
  <div
    v-auto-animate
    class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(64px,1fr))] grid-rows-[repeat(auto-fill,minmax(64px,1fr))] justify-between gap-4 pt-3">
    <HoverIcon
      v-for="item in champFilter().filtered"
      :id="champIdByKey(item)"
      :key="item"
      :k="item"
      type="champion"
      :avatar="{ ui: { root: 'size-22' } }"
      :winrates="
        winrates?.filter((w) => w.champion === champNameByKey(item))
      " />
  </div>
</template>

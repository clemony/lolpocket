<script lang="ts" setup>
const props = defineProps<{
  champion: ChampionStats
}>()

const a = computed(() => {
  return (props.champion.wins / props.champion.games) * 100
})

const data = computed (() => {
  return {
    datasets: [{
      backgroundColor: [cssVar(`--color-${a.value >= 51 ? 'win' : a.value <= 49 ? 'domination' : 'silver'}`), cssVar('--color-b3')],
      data: [props.champion.wins, props.champion.games]
    }],
    labels: ['win', 'loss'],
  }
})
</script>

<template>
  <div class="relative grid  size-12  shrink-0 place-items-center rounded-lg">
    <DonutSkeleton v-if="!champion" class="absolute size-full" />
    <div class="size-11">
      <Donut
        overlap
        cutout="82%"
        :data
      />
    </div>
    <span class="text-xxs! text-bc dst absolute font-medium">
      {{ a.toFixed(1).replace(".0", "") }}
    </span>
  </div>
</template>

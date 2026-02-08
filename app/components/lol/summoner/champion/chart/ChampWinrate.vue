<script lang="ts" setup>
const {
  hideZero,
  ally,
  champion,
  class: className,
  entry,
} = defineProps<{
  champion?: ChampionStats
  ally?: AllyStatDetail
  entry?: RankedEntry
  class?: HTMLAttributes["class"]
  hideZero?: boolean
}>()

const obj = computed(() => ({
  games: champion?.games || ally?.games,
  win: champion?.wins || ally?.win,
  wr:
    champion ? (champion?.wins / champion?.games) * 100
    : entry ? (entry.wins / (entry.wins + entry.losses)) * 100
    : ally ? (ally?.win / ally?.games) * 100
    : null,
}))
const data = computed(() => {
  return {
    datasets: [
      {
        backgroundColor: [
          entry ?
            cssVar(`--color-${entry?.tier ?? "p3"}`)
          : cssVar(
              `--color-${
                obj.value.wr >= 51 ? "win"
                : obj.value.wr <= 49 ? "domination"
                : "silver"
              }`
            ),
          cssVar("--color-p3"),
        ],
        data: [obj.value.win, obj.value.games],
      },
    ],
    labels: ["win", "loss"],
  }
})
</script>

<template>
  <div
    :class="
      cn(
        'relative grid size-12 shrink-0 place-items-center rounded-lg',
        className
      )
    ">
    <DonutSkeleton v-if="!champion || !obj.wr" class="absolute size-full" />
    <div class="size-[94%]">
      <Donut overlap cutout="82%" :data />
    </div>
    <span
      :class="
        cn('absolute text-2xs! font-medium text-pc dst', {
          'opacity-0': hideZero && (!obj.wr || obj.wr === 0),
        })
      ">
      {{ obj.wr ? obj.wr.toFixed(1).replace(".0", "") : 0 }}
    </span>
  </div>
</template>

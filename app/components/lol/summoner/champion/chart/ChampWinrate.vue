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

const obj = computed(() => {
  const games = champion?.games ?? ally?.games ?? 0
  const win = champion?.wins ?? ally?.win ?? 0
  const wr = champion ? (champion.wins / champion.games) * 100
    : entry ? (entry.wins / (entry.wins + entry.losses)) * 100
    : ally ? ((ally.win ?? 0) / (ally.games ?? 1)) * 100
    : null
  return { games, win, wr }
})
const data = computed(() => {
  const wr = obj.value.wr ?? 0
  return {
    datasets: [
      {
        backgroundColor: [
          entry ?
            cssVar(`--color-${entry?.tier ?? "p3"}`)
          : cssVar(
              `--color-${
                wr >= 51 ? "win"
                : wr <= 49 ? "domination"
                : "silver"
              }`
            ),
          cssVar("--color-p3"),
        ],
        data: [obj.value.win ?? 0, obj.value.games ?? 0],
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

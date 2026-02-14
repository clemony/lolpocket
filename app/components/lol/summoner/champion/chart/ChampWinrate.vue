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
  return (
    champion ||
    ally ||
    entry || {
      win: 0,
      loss: 0,
      wr: 0,
      games: 0,
    }
  )
})

const wr = computed(() => {
  if (!obj.value) {
    return
  }
  if (obj.value.win) {
    const total = obj.value.win + (obj.value?.loss || 0)
    return roundDecimalToPercent(obj.value.win, total)
  }
  return 0
})

const data = computed(() => {
  return {
    datasets: [
      {
        backgroundColor: [
          entry ?
            cssVar(`--color-${entry?.tier ?? "p3"}`)
          : cssVar(
              `--color-${
                !wr.value ? "p3"
                : wr.value >= 51 ? "win"
                : wr.value <= 49 ? "domination"
                : "silver"
              }`
            ),
          cssVar("--color-p3"),
        ],
        data: [obj.value?.win ?? 0, obj.value?.loss ?? 0],
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
        'relative grid size-11 shrink-0 place-items-center rounded-lg',
        className
      )
    ">
    <DonutSkeleton v-if="!data" class="absolute size-full" />
    <div class="size-[94%]">
      <Donut overlap cutout="82%" :data />
    </div>
    <span
      :class="
        cn('absolute text-3xs! font-medium text-pc ds-2xs', {
          'opacity-0': hideZero && (!wr || wr === 0),
        })
      ">
      {{ wr || 0 }}
    </span>
  </div>
</template>

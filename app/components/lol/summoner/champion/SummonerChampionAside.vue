<script lang="ts" setup>
import { useScroll } from 'motion-v'

const { data, mastery } = defineProps<{
  mastery: PlayerChampionMastery
  data: UsePlayerStats
}>()
const elementRef = useTemplateRef<HTMLElement>('elementRef')
const { scrollYProgress } = useScroll({
  offset: ['end end', 'start start'],
  target: elementRef,
})

const { stats } = usePlayerStatsInject()
</script>

<template>
  <div
    class="sticky inset-y-0 -top-66 grid max-h-dvh w-76 auto-rows-max items-start gap-3 justify-self-end overflow-y-auto px-1 py-24 **:select-none">
    <h1 class="mb-2 dst">
      {{ champNameById(stats?.championId) }}
    </h1>

    <Card class="rounded-md p-2">
      <div class="mt-px grid aspect-square w-full overflow-hidden rounded-md shadow-sm dss">
        <Champion
          :id="mastery?.championId"
          type="tile"
          class="absolute w-full translate-y-6 scale-120!" />
      </div>
      <div class="flex w-full items-center gap-2">
        <MasteryBadge
          v-if="mastery"
          class="size-17"
          :mastery />
        <div class="flex w-full flex-col gap-1.5 pr-1 text-end">
          <div class="inline-flex items-center justify-between align-baseline">
            <span
              data-tip="Total level"
              class="text-4 font-bold">
              lv. {{ mastery?.level }}
            </span>
            <span
              data-tip="Total points"
              class="pr-1 text-1 font-medium tracking-wide">
              {{ mastery?.totalPoints.toLocaleString() }}
            </span>
          </div>
          <MasteryProgress
            v-if="mastery"
            :mastery />
        </div>
      </div>
    </Card>

    <ChampionStatsTimelineNav :summoner="data.summoner" />
  </div>
</template>
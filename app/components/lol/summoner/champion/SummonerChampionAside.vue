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
    class="sticky inset-y-0 -top-66 grid max-h-dvh w-full auto-rows-max items-start gap-3 overflow-x-visible overflow-y-auto px-1 py-24 **:select-none">
    <Button
      data-tip="Back to all champions"
      variant="link"
      class="mb-2 items-center gap-4 px-0 dst"
      @click="navigateTo({ name: 'summoner-region-slug-champions' })">
      <!--      <Icon
        name="left"
        class="" /> -->
      <ChampionIcon
        :id="mastery?.championId"
        type="tile"
        class="size-12 rounded-full" />
      <h1>
        {{ champNameById(stats?.championId) }}
      </h1>
    </Button>

    <div class="flex items-center gap-3">
      <!--       <div class="absolute bottom-1.5 flex w-full items-center gap-2 px-2">
        <Icon
          name="lol:mastery"
          class="text-white/80" />
        <MasteryProgress
          v-if="mastery"
          class="grow"
          :mastery />
      </div> -->
    </div>

    <ChampionStatsTimelineNav :summoner="data.summoner" />
  </div>

  <!--       <div class="flex w-full flex-col gap-1.5 pr-1 text-end">
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
        </div> -->
</template>
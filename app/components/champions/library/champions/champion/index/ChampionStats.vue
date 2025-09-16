<script setup lang="ts">
const { stats } = defineProps<{
  stats: Record<string, ChampionStat>
}>()

const ignoredStatKeys = [
  'acquisitionRadius',
  'selectionRadius',
  'pathingRadius',
  'gameplayRadius',
  'criticalStrikeDamage',
  'criticalStrikeDamageModifier',
  'attackCastTime',
  'attackTotalTime',
  'attackDelayOffset',
  'attackSpeedRatio',
]

const open = ref(false)
const level = ref([1])

const { resolveStat } = useChampionStatGrowth(computed(() => level.value[0]))

const filteredStats = computed (() => Object.entries(stats).filter(([key]) => !ignoredStatKeys.includes(key)))
const moreFilteredStats = computed (() => Object.entries(stats).filter(([key]) => ignoredStatKeys.includes(key)))

const filteredResolvedStats = computed(() => {
  return filteredStats.value.reduce(
    (acc, [key, stat]) => {
      const isAttackSpeed = key === 'attackSpeed'
      const ratio = stats.attackSpeedRatio?.flat

      const resolved = resolveStat(stat, {
        type: isAttackSpeed ? 'attackSpeed' : undefined,
        ratio: isAttackSpeed ? ratio : undefined,
        roundTo: 2,
      })

      if (resolved != null)
        acc[key] = resolved

      return acc
    },
    {} as Record<string, { min: number, current: number, max: number }>
  )
})

const moreResolvedStats = computed(() => {
  return moreFilteredStats.value.reduce(
    (acc, [key, stat]) => {
      const resolved = resolveStat(stat, {
        roundTo: 2,
      })

      if (resolved != null)
        acc[key] = resolved

      return acc
    },
    {} as Record<string, { min: number, current: number, max: number }>
  )
})
</script>

<template>
  <CollapsibleContent class="data-[state=open]:!overflow-visible z-1 px-5 py-4">
    <div class="flex flex-col gap-3 pt-3">
      <Slider
        v-model:model-value="level"
        v-tippy="{
          content: `Champion Level ${level}`,
          placement: 'top-end',
          theme: 'basic',
          arrow: false,
          followMouse: true,
          offset: [-26, 34],
        }"
        thumb-class="size-6 grid place-items-center relative ring ring-bc/30 border-1 focus-visible:ring-1 focus-visible:ring-bc/80 focus-visible:ring-offset-3"
        thumb-alignment="contain"
        :default-value="[1]"
        :max="18"
        :step="1"
        :min-steps-between-thumbs="1"
        :min="1">
        <span class="font-semibold !text-xxs absolute">{{ level[0] }}</span>
      </Slider>

      <div
        :class="
          cn('grid grid-cols-2 gap-x-6 px-1 pt-3 gap-y-1  *:w-full w-full items-center auto-rows-fr  ')
        ">
        <ChampionStatBadge
          v-for="(value, key, i) in filteredResolvedStats"
          :key="key"
          :i
          :length="filteredStats.length"
          :stat="key"
          :value="value" />
      </div>

      <Collapsible v-model:open="open">
        <CollapsibleTrigger class="w-full text-xxs opacity-60 hover:opacity-100 justify-end hover:underline underline-offset-3 -mt-1">
          {{ !open ? 'more...' : 'less...' }}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            :class="
              cn('grid grid-cols-2 gap-x-6 px-1 pt-3 gap-y-1  *:w-full w-full items-center auto-rows-fr  ')
            ">
            <ChampionStatBadge
              v-for="(value, key, i) in moreResolvedStats"
              :key="key"
              :i
              :length="moreFilteredStats.length"
              :stat="key"
              :value="value" />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </CollapsibleContent>
</template>

<style scoped></style>

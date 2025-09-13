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

const level = ref([1])

const { resolveStat } = useChampionStatGrowth(computed (() => level.value[0]))

const filteredResolvedStats = computed(() => {
  return Object.entries(stats)
    .filter(([key]) => !ignoredStatKeys.includes(key))
    .reduce((acc, [key, stat]) => {
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
    }, {} as Record<string, { min: number, current: number, max: number }>)
})
</script>

<template>
  <CollapsibleContent class="data-[state=open]:!overflow-visible z-1">
    <div class="flex flex-col gap-5  px-2">
      <div class="flex gap-2 pt-2 px-3">
        <Slider
          v-model:model-value="level"
          v-tippy="{ content: `Champion Level ${level}`, placement: 'top-end', theme: 'basic', arrow: false, followMouse: true, offset: [0, 15] }"
          thumb-class="size-7 grid place-items-center relative  border-1 focus-visible:ring-1"
          thumb-alignment="contain"
          :default-value="[1]"
          :max="18"
          :step="1"
          :min-steps-between-thumbs="1"
          :min="1">
          <span class="font-medium text-3 absolute">{{ level[0] }}</span>
        </Slider>
      </div>

      <div :class="cn('grid grid-cols-1 *:w-full w-full items-center auto-rows-fr   pb-3')">
        <ChampionStatBadge
          v-for="(value, key) in filteredResolvedStats"
          :key="key"
          :stat="key"
          :value="value">
        </ChampionStatBadge>
      </div>
    </div>
  </CollapsibleContent>
</template>

<style scoped></style>

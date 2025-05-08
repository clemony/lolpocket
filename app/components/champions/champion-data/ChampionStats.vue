<script setup lang="ts">
const { stats } = defineProps<{
  stats: Record<string, ChampionStat>
}>()

const { data } = await useFetch('/api/lists/stat-max-values.json')
const maxStats = computed(() => data.value as Record<string, number>)

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

const level = ref(1)
const { resolveStat } = useChampionStatGrowth(computed (() => level.value))

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
    }, {} as Record<string, number>)
})
</script>

<template>
  <Field class="**:select-text grid gap-y-4 brightness-90 m-0">
    <Select v-model:model-value="level" class="w-fit mb-4">
      <ContrastSelectTrigger class="!h-7 w-fit flex gap-1 text-nc items-center">
        lvl
        <SelectValue class="!text-nc" :placeholder="level.toString()" />
      </ContrastSelectTrigger>
      <ContrastSelectContent class="!z-9999  backdrop-blur-md">
        <SelectGroup>
          <ContrastSelectItem v-for="i in 18" :key="i" :value="i">
            {{ i }}
          </ContrastSelectItem>
        </SelectGroup>
      </ContrastSelectContent>
    </Select>

    <div v-for="(value, key) in filteredResolvedStats" :key="key" class="col-start-1 grid h-fit ">
      <div class="justify-between grid grid-cols-[46px_1fr_46px] items-center mb-1.5">
        <span class="font-semibold text-2 tracking-tight">
          {{ (championStats.find(s => s.id === key)?.short || key) }}
        </span>
        <progress class="progress w-full " :value="value" :max="maxStats[key] ?? 100"></progress>
        <span class="font-semibold text-2 justify-self-end text-end ">
          {{ value }}
        </span>
      </div>
    </div>
  </Field>
</template>

<style scoped></style>

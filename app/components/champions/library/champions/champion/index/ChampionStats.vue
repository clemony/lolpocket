<script setup lang="ts">
import { statIndex } from '~~/shared/appdata'

const { champion } = defineProps<{
  champion: Champion
}>()

const ignoredStatKeys = [
  'acquisitionRadius',
  'selectionRadius',
  'pathingRadius',
  'gameplayRadius',
  'attackCastTime',
  'attackTotalTime',
  'attackDelayOffset',
  'attackSpeedRatio',
  'criticalStrikeDamageModifier',
]

const attackPriority = [
  'attackDamage',
  'attackRange',
  'attackSpeed',
  'attackDelayOffset',
  'attackSpeedRatio',
  'attackCastTime',
  'criticalStrikeDamage',
  'attackTotalTime',
]

const basicStats = [
  'health',
  'healthRegen',
  'mana',
  'manaRegen',
  'armor',
  'magicResistance',
  'movespeed',
]

const defaultStats = [
  ...basicStats.slice(0, -1),
  'attackDamage',
  'attackRange',
  'attackSpeed',
  'movespeed',
]
const open = ref(false)
const level = ref([1])

const { resolveStat } = useChampionStatGrowth(computed(() => level.value[0]))
const scalingStats = computed (() => Object.entries(champion.stats).filter(([key]) => !ignoredStatKeys.includes(key)))

const resolvedScalingStats = computed(() => {
  return Object.entries(champion.stats).reduce(
    (acc, [key, stat]) => {
      const isAttackSpeed = key === 'attackSpeed'
      const isCritDmg = key === 'criticalStrikeDamage'
      const ratio = champion.stats.attackSpeedRatio?.flat
      const modifier = champion.stats.criticalStrikeDamageModifier?.flat

      const resolved = resolveStat(stat, {
        modifier: isCritDmg ? modifier : undefined,
        ratio: isAttackSpeed ? ratio : undefined,
        roundTo: 2,
        type: isAttackSpeed ? 'attackSpeed' : isCritDmg ? 'criticalStrikeDamage' : undefined,
      })

      if (resolved !== null)
        acc[key] = resolved

      return acc
    },
    {} as Record<string, { min: number | null, current: number | string, max: number | null }>
  )
})
const filteredStats = computed (() => {
  if (!resolvedScalingStats.value)
    return

  const stats = Object.entries(champion.stats).map((s) => {
    const val = resolvedScalingStats.value[s[0]]
    return {
      values: {
        ...s[1],
        current: val ? val.current : null,
        max: val ? val.max : null,
        min: val ? val.min : null,
      },
      ...statIndex[s[0]],
    }
  })

  return {
    default: {
      stats: stats
        .filter(s => defaultStats.includes(s.id))
        .sort((a, b) => defaultStats.indexOf(a.id) - defaultStats.indexOf(b.id))

    },
    more: [
      {
        name: 'Basic',
        stats: stats
          .filter(s => basicStats.includes(s.id))
          .sort((a, b) => basicStats.indexOf(a.id) - basicStats.indexOf(b.id))
      },
      {
        name: 'Attack',
        stats: stats
          .filter(s => attackPriority.includes(s.id))
          .sort((a, b) => attackPriority.indexOf(a.id) - attackPriority.indexOf(b.id))
      },
      {
        name: 'Unit Radius',
        stats: stats.filter(k => k.id.match(/.*Radius/))
      },
    ]
  }
})
</script>

<template>
  <Collapsible
    v-model:open="ui().collapseStates.championInfo[0]"
    class="px-0 data-[state=open]:!overflow-visible group/cl flex flex-col gap-6 data-[state=open]:h-auto">
    <CollapsibleTrigger class="w-full cursor-default field-box flex flex-col">
      <div
        class="flex group/tr  min-h-16  h-16 px-5  cursor-pointer  w-full items-center justify-between">
        <h3 class="dst group-hover/tr:underline underline-offset-3">
          Stats
        </h3>
        <CaretFlip />
      </div>
      <div
        class="w-full pb-2  px-5  -mt-3 flex flex-col items-start group-data-[state=open]/cl:animate-in  group-data-[state=open]/cl:fade-in-0  group-data-[state=closed]/cl:animate-out  group-data-[state=closed]/cl:fade-out group-data-[state=closed]/cl:hidden duration-300"
        @click.stop>
        <span class="w-full text-start">
          {{ champion.name }} lv. {{ level[0] }}
        </span>
        <div class="w-full h-12 mt-5 mb-1 relative">
          <Slider
            v-model:model-value="level"
            class="z-1 "
            thumb-class="size-6  shadow-none drop-shadow-none !overflow-visible  grid place-items-center relative border-0  focus-visible:!ring-1 ring ring-b4 focus-visible:!ring-neutral focus-visible:!ring-offset-2"
            thumb-alignment="contain"
            :default-value="[1]"
            :max="18"
            :step="1"
            :min-steps-between-thumbs="1"
            :min="1">
            <span class="!text-1 absolute font-semibold">{{ level[0] }}</span>
          </Slider>
          <div class=" absolute pl-5.5 pr-4 h-10 z-0 w-full left-1  top-1 grid grid-cols-18 justify-evenly ">
            <button
              v-for="i in 18"
              :key="i"
              class="size-full hover:**:font-bold hover:**:opacity-100 cursor-pointer transition-all duration-200 grid  relative "
              @click="level[0] = i">
              <div
                :class="cn('absolute  !self-start grid')"
                :style="{
                  transform: `translateX(${((i - 1) / 18) * 100}%)`,
                }">
                <span
                  :class="cn('opacity-50 !self-start scale-y-50', { 'scale-y-80 translate-y-0.5': [1, 6, 11, 16, 18].includes(i) })">
                  |
                </span>
                <span
                  v-if="[1, 6, 11, 16, 18].includes(i) "
                  class="absolute tabular-nums items-end self-end justify-self-center  translate-y-4.5 text-1 ">
                  {{ i }}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="z-1 h-fit  w-full gap-2 flex flex-col pb-2 data-[state=open]:!overflow-visible">
      <div
        :class="
          cn('grid grid-cols-2 gap-x-8 px-5  mt-2  field-box pt-3  gap-y-2  *:w-full w-full items-center auto-rows-fr transition-all duration-100', { 'max-h-0 opacity-0 hidden invisible': open })
        ">
        <ChampionStat
          v-for="(stat, i) in filteredStats.default.stats"
          :key="stat.name"
          :i
          :length="scalingStats.length"
          :stat />
      </div>

      <Collapsible
        v-model:open="open"
        class="w-full">
        <CollapsibleContent class="flex pt-2 gap-8 flex-col pb-1">
          <div
            v-for="group, ix in filteredStats.more"
            :key="ix"
            class=" field-box pt-3 ">
            <div
              class="field-legend">
              {{ group.name }}
            </div>
            <div
              :class="
                cn('!grid !grid-cols-2 px-5 gap-x-6  gap-y-1   pb-1 w-full items-center auto-rows-fr  ')
              ">
              <ChampionStat
                v-for="stat, i in group.stats"
                :key="i"
                :i
                :group-name="group.name"
                :length="group.stats.length"
                :stat />
            </div>
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger
          class="w-full">
          <Button
            variant="link"
            class="w-[98%] px-2 inline justify-self-center mt-2 text-1 opacity-50 hover:opacity-100 text-end">
            <span class="align-bottom">{{ open ? 'less' : 'more' }}</span>

            <span class="font-mono inline align-baseline -tracking-[2.5px] size-4.5 grid place-items-center">
              [{{ open ? '-' : '+' }}]
            </span>
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </CollapsibleContent>
  </Collapsible>
</template>

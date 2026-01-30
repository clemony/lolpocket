<script setup lang="ts">
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
/*
const scalingStats = computed(() =>
  Object.entries(champion.stats).filter(
    ([key]) => !ignoredStatKeys.includes(key)
  )
)

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
        type:
          isAttackSpeed
            ? 'attackSpeed'
            : isCritDmg
              ? 'criticalStrikeDamage'
              : undefined,
      })

      if (resolved !== null) acc[key] = resolved

      return acc
    },
    {} as Record<
      string,
      { min: number | null, current: number | string, max: number | null }
    >
  )
})
const filteredStats = computed(() => {
  if (!resolvedScalingStats.value) return

  const stats = Object.entries(champion.stats).map(([k, v]) => {
    const val = resolvedScalingStats.value[k]
    return {
      values: {
        current: val ? val.current : null,
        max: val ? val.max : null,
        min: val ? val.min : null,
        v,
      },
      ...statIndex[k],
    }
  })

  return {
    default: {
      stats: stats
        .filter(s => defaultStats.includes(s.id))
        .sort(
          (a, b) => defaultStats.indexOf(a.id) - defaultStats.indexOf(b.id)
        ),
    },
    more: [
      {
        name: 'Basic',
        stats: stats
          .filter(s => basicStats.includes(s.id))
          .sort((a, b) => basicStats.indexOf(a.id) - basicStats.indexOf(b.id)),
      },
      {
        name: 'Attack',
        stats: stats
          .filter(s => attackPriority.includes(s.id))
          .sort(
            (a, b) =>
              attackPriority.indexOf(a.id) - attackPriority.indexOf(b.id)
          ),
      },
      {
        name: 'Unit Radius',
        stats: stats?.filter(k => k?.id?.match(/.*Radius/)),
      },
    ],
  }
}) */
</script>

<template>
  <Collapsible
    v-model:open="ui().collapseStates.championInfo[0]"
    class="group/cl flex flex-col gap-6 px-0 open:h-auto open:overflow-visible!"
  >
    <CollapsibleTrigger class="field-box flex w-full cursor-default flex-col">
      <div
        class="group/tr flex h-16 min-h-16 w-full cursor-pointer items-center justify-between px-5"
      >
        <h3 class="underline-offset-3 dst group-hover/tr:underline">
          Stats
        </h3>
        <CaretFlip />
      </div>
      <div
        class="group-data-[state=open]/cl:animate-in group-data-[state=open]/cl:fade-in-0 group-data-[state=closed]/cl:fade-out group-data-[state=closed]/cl:animate-out -mt-3 flex w-full flex-col items-start px-5 pb-2 duration-300 group-closed/cl:hidden"
        @click.stop
      >
        <span class="w-full text-start">
          {{ champion.name }} lv. {{ level[0] }}
        </span>
        <div class="relative mt-5 mb-1 h-12 w-full">
          <Slider
            v-model:model-value="level"
            class="z-1"
            thumb-class="size-6  shadow-none drop-shadow-none !overflow-visible  grid place-items-center relative border-0  focus-visible:!ring-1 ring ring-b4 focus-visible:!ring-neutral focus-visible:!ring-offset-2"
            thumb-alignment="contain"
            :default-value="[1]"
            :max="18"
            :step="1"
            :min-steps-between-thumbs="1"
            :min="1"
          >
            <span class="absolute text-xs! font-semibold">{{ level[0] }}</span>
          </Slider>
          <div
            class="absolute top-1 left-1 z-0 grid h-10 w-full grid-cols-18 justify-evenly pr-4 pl-5.5"
          >
            <button
              v-for="i in 18"
              :key="i"
              class="relative grid size-full cursor-pointer transition-all duration-200 hover:**:font-bold hover:**:opacity-100"
              @click="level[0] = i"
            >
              <div
                :class="cn('absolute grid self-start!')"
                :style="{
                  transform: `translateX(${((i - 1) / 18) * 100}%)`,
                }"
              >
                <span
                  :class="
                    cn('scale-y-50 self-start! opacity-50', {
                      'translate-y-0.5 scale-y-80': [1, 6, 11, 16, 18].includes(
                        i,
                      ),
                    })
                  "
                >
                  |
                </span>
                <span
                  v-if="[1, 6, 11, 16, 18].includes(i)"
                  class="absolute translate-y-4.5 items-end self-end justify-self-center text-xs tabular-nums"
                >
                  {{ i }}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent
      class="z-1 flex h-fit w-full flex-col gap-2 pb-2 open:overflow-visible!"
    >
      <div
        :class="
          cn(
            'field-box mt-2 grid w-full auto-rows-fr grid-cols-2 items-center gap-x-8 gap-y-2 px-5 pt-3 transition-all duration-100 *:w-full',
            { 'invisible hidden max-h-0 opacity-0': open },
          )
        "
      >
        <!--  <ChampionStat
          v-for="(stat, i) in filteredStats.default.stats"
          :key="stat.name"
          :i
          :length="scalingStats.length"
          :stat
        /> -->
      </div>

      <Collapsible v-model:open="open" class="w-full">
        <CollapsibleContent class="flex flex-col gap-8 pt-2 pb-1">
          <!--  <div
            v-for="(group, ix) in filteredStats.more"
            :key="ix"
            class="field-box pt-3"
          >
            <div class="field-legend">
              {{ group.name }}
            </div>
            <div
              :class="
                cn(`
                  grid! w-full auto-rows-fr grid-cols-2! items-center gap-x-6
                  gap-y-1 px-5 pb-1
                `)
              "
            >
              <ChampionStat
                v-for="(stat, i) in group.stats"
                :key="i"
                :i
                :group-name="group.name"
                :length="group.stats.length"
                :stat
              />
            </div>
          </div> -->
        </CollapsibleContent>
        <CollapsibleTrigger class="w-full">
          <LessOrMore class="w-[98%] justify-self-center" :open />
        </CollapsibleTrigger>
      </Collapsible>
    </CollapsibleContent>
  </Collapsible>
</template>

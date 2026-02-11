<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { skills } = storeToRefs(sChampion())

const route = useRoute()
const ckey = computed(() => String(route.params.champion_key))
const skillPriority = computed(() => skills.value?.priority ?? {})
const skillByLevel = computed(() => skills.value?.byLevel ?? [])
const skillPriorityEntries = computed(
  () => Object.entries(skillPriority.value) as OrderedStatEntry[]
)
</script>

<template>
  <UPageSection title="Abilities" :class="cn('', className)">
    <ChampionSkillPriority
      v-for="(set, i) in skillPriorityEntries"
      :key="i"
      class="w-fit"
      simple
      separator
      :title="i + 1"
      :set />

    <UCard
      class="mt-16 flex h-full w-fit items-center justify-center gap-3 self-end p-8">
      <div class="-mt-1 grid grid-cols-1 grid-rows-5 gap-2">
        <div
          v-for="(k, i) in ['Q', 'W', 'E', 'R']"
          :key="k"
          class=""
          :style="{
            gridRowStart: i + 2,
          }">
          <Ability class="size-11" :akey="k" :ckey />
        </div>
      </div>

      <div class="grid auto-rows-min items-center">
        <div class="grid grid-cols-18 gap-2">
          <div
            v-for="(_, i) in skillByLevel"
            :key="i"
            class="grid size-12 place-items-center text-sm font-medium">
            {{ i }}
          </div>
        </div>
        <div class="grid grid-cols-18 gap-2 overflow-hidden rounded-lg">
          <div
            v-for="(level, i) in skillByLevel"
            :key="i"
            class="grid grid-rows-4 place-items-center gap-2">
            <div
              v-for="(ability, k) in level"
              :key="k"
              :data-type="`${ability.winrate}% winrate
          ${ability.games} games
          ${ability.pickrate}% pickrate`"
              :class="
                cn(
                  'flex size-11 cursor-default flex-col items-center justify-center gap-px overflow-hidden bg-tint-p2/40 text-xs! leading-none select-none',
                  {
                    'text-transparent': (ability.winrate ?? 0) === 0,
                    'bg-neutral/90 text-nc shadow-sm dss':
                      (ability.winrate ?? 0) !== 0,
                  }
                )
              ">
              <span
                :class="
                  cn('font-semibold brightness-110 saturate-150', {
                    'text-inspiration': (ability.winrate ?? 0) >= 51,
                    'text-domination':
                      (ability.winrate ?? 0) <= 49 &&
                      (ability.winrate ?? 0) !== 0,
                    'text-p3':
                      (ability.winrate ?? 0) < 51 &&
                      (ability.winrate ?? 0) > 49,
                  })
                ">
                {{ ability.winrate ?? 0 }}
              </span>
              <!--  <span class="font-medium! opacity-80">{{ ability.games }}</span> -->
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UPageSection>
</template>

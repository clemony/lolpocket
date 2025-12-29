<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const skillRef = useTemplateRef('skillRef')

const { isActive, progressBetween } = useScrollSection(
  'skills',
  skillRef
)
const { skills } = usePlayerStatsInject()

const route = useRoute()
const ckey = computed (() => String(route.params.champion_key))
</script>

<template>
  <div
    ref="skillRef"

    :class="cn('', className)">
    <ChampionSkillPriority />
    <div class="mt-16 flex w-full pl-2">
      <div class="flex w-fit items-center gap-3">
        <div class="-mt-1 grid grid-cols-1 grid-rows-5 gap-2">
          <div
            v-for="k, i in ['Q', 'W', 'E', 'R']"
            :key="k"
            :style="{
              gridRowStart: i + 2,
            }"
            class="">
            <Ability
              class="size-11"
              :akey="k"
              :ckey />
          </div>
        </div>

        <div class="grid auto-rows-min items-center">
          <div
            class="grid grid-cols-18 gap-2">
            <div
              v-for="_, i in skills.byLevel"
              :key="i"
              class="grid size-12 place-items-center text-2 font-medium">
              {{ i }}
            </div>
          </div>
          <div class="grid grid-cols-18 gap-2 overflow-hidden rounded-lg">
            <div
              v-for="level, i in skills.byLevel"
              :key="i"
              class="grid grid-rows-4 place-items-center gap-2">
              <div
                v-for="ability, k in level"
                :key="k"
                :data-tip="`${ability.winrate}% winrate
          ${ability.games} games
          ${ability.pickrate}% pickrate`"
                :class="cn('flex size-11 cursor-default flex-col items-center justify-center gap-px overflow-hidden bg-tint-b2/40 text-1! leading-none select-none', {
                  'text-transparent': ability.winrate === 0,
                  'bg-neutral/90 text-nc dss shadow-sm': ability.winrate !== 0 })">
                <span
                  :class="cn('font-semibold brightness-110 saturate-150', {
                    'text-inspiration ': ability.winrate >= 51,
                    'text-domination ': ability.winrate <= 49 && ability.winrate !== 0,
                    'text-b3 ': ability.winrate < 51 && ability.winrate > 49 })">
                  {{ ability.winrate }}
                </span>
                <!--  <span class="font-medium! opacity-80">{{ ability.games }}</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
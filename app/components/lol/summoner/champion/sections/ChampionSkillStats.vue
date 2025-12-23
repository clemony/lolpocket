<script lang="ts" setup>
const skillRef = useTemplateRef('skillRef')

const { isActive, progressBetween } = useScrollSection(
  'skills',
  skillRef
)
const { skills } = usePlayerStatsInject()

const route = useRoute()
const cKey = computed (() => String(route.params.champion_key))
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="flex w-fit items-center gap-3">
      <div class="-mt-2.5 grid grid-cols-1 grid-rows-5 gap-2">
        <div
          v-for="k, i in ['Q', 'W', 'E', 'R']"
          :key="k"
          :style="{
            gridRowStart: i + 2,
          }"
          class="">
          <img
            :src="`/img/abilities/${cKey}${k}.webp`"
            :alt="`icon for ${cKey}'s ${k} ability`"
            class="size-12 rounded-md shadow-sm drop-shadow-sm" />
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
              :data-tip="`${ability.winrate}}% winrate
        ${ability.games} games
        ${ability.pickrate} pickrate`"
              :class="cn('flex size-12 flex-col items-center justify-center gap-px overflow-hidden bg-tint-b2/40 text-1! leading-none', {
                'bg-tint-inspiration/0 text-white dss ': ability.winrate >= 51 && ability.winrate < 60,
                'text-white bg-tint-domination/0 dss': ability.winrate <= 49 && ability.winrate !== 0,
                'text-transparent': ability.winrate === 0,
                'bg-b3 ': ability.winrate < 51 && ability.winrate > 49,
                'bg-precision ': ability.winrate >= 60 })">
              <span class="font-semibold"> {{ ability.winrate }}</span>
              <span class="font-medium!">{{ ability.games }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
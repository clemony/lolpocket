<script lang="ts" setup>
const { summoner, queue, patch } = defineProps<{
  summoner: any
  queue: any
  patch: any
}>()
const { bayesianChampions } = useMatchChampions(computed (() => queue), summoner.puuid, computed (() => summoner.simplifiedMatches))

const winrateDiff = computed (() => {
  return -1
})
</script>

<template>
  <transition-slide>
    <div v-if="bayesianChampions && bayesianChampions[0]" :key="bayesianChampions[0].champion.champion.id" class="stats bg-b1  rounded-box border border-b3 h-full shadow-warm-soft grid w-full grid-cols-3 group/champ-bar min-h-32">
      <div class="stat py-5">
        <div class="stat-figure">
          <div class="avatar online inset-shadow-sm">
            <div class="w-16 rounded-full inset-shadow-sm">
              <img :src="`/img/champion/${bayesianChampions[0].champion.champion.id}.webp`" class="scale-116" />
            </div>
          </div>
        </div>
        <div class="stat-title text-3 flex gap-1 items-center pl-0.5">
          Pocket Pick
        </div>
        <div class="stat-value text-6">
          {{ bayesianChampions[0].champion.champion.name }}
        </div>
        <div class="stat-desc text-2 font-medium pl-0.5">
          Patch {{ patch }}
        </div>
      </div>

      <div class="stat relative">
        <div class="stat-figure top-1 right-4 absolute">
          <icon v-if="summoner.simplifiedMatches" name="ph:arrow-up-right-bold" class="opacity-50 size-5 dst" :class="{ ' -scale-y-100': winrateDiff < 0 }" />
        </div>
        <div class="stat-title text-2">
          Overall
        </div>
        <div v-if="bayesianChampions[0].champion.champion" class="stat-value dst flex items-center">
          25.6
          <icon name="ph:percent-bold" class="size-7" />
        </div>
        <div class="stat-desc text-2">
          21% higher <APDtooltip /> than  {{ useToNumber(patch).value - 0.01 }}
        </div>
      </div>

      <div class="stat relative">
        <div class="stat-figure absolute right-4 top-1">
          <icon v-if="summoner.simplifiedMatches" name="ph:arrow-up-right-bold" class="size-5 dst opacity-50" :class="{ ' -scale-y-100': winrateDiff < 0 }" />
        </div>
        <div class="stat-title text-2">
          Adjusted
        </div>
        <div v-if="bayesianChampions[0].champion.champion" class="stat-value dst flex items-center">
          25.6
          <icon name="ph:percent-bold" class="size-7" />
        </div>
        <div class="stat-desc text-2">
          21% higher <APDtooltip /> than  {{ useToNumber(patch).value - 0.01 }}
        </div>
      </div>
      <NoDataOverlay v-if="!summoner.simplifiedMatches.length" />
    </div>
  </transition-slide>
</template>
<script setup lang="ts">
import { regionDictionary } from '~/data/regionDictionary'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const region = computed(() => {
  return regionDictionary[summoner.region.toLowerCase()] ?? summoner.region
})
</script>

<template>
  <div class="flex  w-110 min-h-26 !h-26 items-center gap-5 ">
    <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0">
      <ProfileSummonerIcon v-if="summoner" :summoner="summoner" class="size-19 rounded-full" />
    </div>
    <div class="flex flex-col justify-center gap-1.5 drop-shadow-sm">
      <div class="flex items-center gap-6">
        <h1 class="!text-8 font-serif leading-none grow font-bold">
          {{ summoner.name || 'Summoner' }}
        </h1>
        <p class="pt-1.25">
          lv. {{ summoner.level }}
        </p>
        <!--
          <img
            :src="`/img/crests/mini/${summoner.peakRank.peak}.png`"
            class="-ml-2.25 size-8 pt-0.75 drop-shadow-xs"
          />
 -->
      </div>

      <div class="flex items-center lowercase gap-4 pl-0.5 font-normal">
        <span class=" flex items-center">
          <icon name="lucide:hash" class="size-3.75" />
          {{ summoner.tag }}</span>
        <span class="lowercase flex items-center">
          <icon name="lucide:at-sign" class="size-3.25 dst" />
          {{ region }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

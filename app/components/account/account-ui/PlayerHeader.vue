<script setup lang="ts">
import { regionDictionary } from '~~/public/api/regionDictionary'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

  console.log("💠 - summoner:", summoner)
const region = computed(() => {
  return regionDictionary[summoner.region.toLowerCase()] ?? summoner.region
})
</script>

<template>
  <div class="flex  w-120 h-fit items-center gap-5 ">
    <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0 relative">
      <LazyProfileSummonerIcon v-if="summoner" :summoner-name="summoner.name" :url="summoner.profileIcon" class="size-19 rounded-full" />
    </div>
    <div class="flex flex-col grow justify-center gap-1.5 drop-shadow-sm">
      <div class="flex items-center gap-6">
        <h1 class="!text-8 font-serif leading-none grow font-bold">
          {{ summoner.name || 'Summoner' }}
        </h1>

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
        <span class="lowercase flex items-center grow">
          <icon name="lucide:at-sign" class="size-3.25 dst" />
          {{ region }}</span>
      </div>
    </div>
    <div class="grid h-full items-center justify-items-end justify-self-end">
      <p class="pt-1.25">
        lv. {{ summoner.level }}
      </p>
      <UpdateMatchHistoryButton v-if="summoner" :summoner="summoner" class="" />
    </div>
  </div>
</template>

<style scoped></style>

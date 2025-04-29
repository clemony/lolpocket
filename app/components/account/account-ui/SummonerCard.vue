<script setup lang="ts">
import { regionDictionary } from 'data/regionDictionary'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const region = computed(() => {
  return regionDictionary[summoner.region.toLowerCase()] ?? summoner.region
})
</script>

<template>
  <div class="flex  w-full h-fit items-center gap-5 ">
    <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0 relative">
      <ProfileSummonerIcon v-if="summoner" :summoner="summoner" class="size-14 rounded-full" />
    </div>
    <div class="flex flex-col grow justify-center gap-1.5 drop-shadow-sm">
      <div class="flex w-fit items-end gap-4 h-6">
        <h1 class="!text-8 font-serif leading-none grow font-bold">
          {{ summoner.name || 'Summoner' }}
        </h1>
        <div class=" flex items-center h-full relative">
          <span class="absolute flex items-center -bottom-0.75 font-medium">
          <icon name="lucide:hash" class="size-3.75" />
          {{ summoner.tag }}
        </span>
        </div>
      </div>

      <div class="flex items-center lowercase gap-4 font-normal">
      <span class="">
        lv. {{ summoner.level }}
      </span>
        <span class="lowercase flex items-center">
          <icon name="lucide:at-sign" class="size-3.25 dst" />
          {{ region }}</span>
      </div>
    </div>
    
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const props = defineProps<{
  summoner: userAccount
}>()
</script>

<template>
  <div class="flex justify-start w-full left-0 absolute bg-gradient-to-b pb-4 from-b1 to-b1/60 backdrop-blur-md  min-h-26 !h-26 w-full absolute -top-0 z-1">
    <div class="flex items-center gap-5  w-110">
      <div class="border-neutral/60 grid place-items-center rounded-full border shadow-md">
        <SummonerIcon class="size-19 rounded-full" />
      </div>

      <div class="flex flex-col justify-center gap-1.5 drop-shadow-sm">
        <div class="flex items-center gap-6">
          <h1 class="!text-8 font-serif leading-none font-bold">
            {{ summoner.gameName || summoner.name || 'Summoner' }}
          </h1>
          <p class="pt-1.25">
            lv. {{ summoner.summonerLevel }}
          </p>
          <!--
          <img
            :src="`/img/crests/mini/${summoner.peakRank.peak}.png`"
            class="-ml-2.25 size-8 pt-0.75 drop-shadow-xs"
          />
 -->
        </div>

        <div class="flex items-center lowercase gap-4 pl-0.5 font-normal">
          <span>#{{ summoner.tagLine }}</span>
          <span>#{{ summoner.region }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

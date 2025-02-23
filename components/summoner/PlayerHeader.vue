<script setup lang="ts">
const props = defineProps<{
  summoner: userAccount
}>()
</script>

<template>
  <div class="grid w-[86%] grid-cols-[1fr_1.5fr] justify-around gap-6">
    <div class="flex items-center gap-5 px-3 normal-case">
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

        <div class="flex items-center gap-4 pl-0.5 font-normal">
          <span>#{{ summoner.tagLine }}</span>
          <span>#{{ summoner.region }}</span>
        </div>
      </div>

      <Grow />
    </div>
    <RecentPlayRate />
  </div>
</template>

<style scoped></style>

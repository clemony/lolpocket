<script setup lang="ts">
  import { summoner } from 'shared/data/summonerData';
</script>
<template>
  <div class="grid w-[86%] grid-cols-[1fr_1.5fr] justify-around gap-6">
    <div class="flex items-center gap-5 px-3 normal-case">
      <div class="border-neutral/60 grid place-items-center rounded-full border shadow-md">
        <img
          :src="summoner.icon"
          class="size-19 rounded-full" />
      </div>

      <div class="flex flex-col justify-center gap-1.5 drop-shadow-sm">
        <div class="flex items-center gap-6">
          <h1 class="!text-8 font-serif leading-none font-bold">
            {{ summoner.name }}
          </h1>
          <p class="pt-1.25">lv. {{ summoner.level }}</p>

          <img
            :src="`/img/crests/mini/${summoner.peakRank.peak}.png`"
            class="-ml-2.25 size-8 pt-0.75 drop-shadow-xs" />

          <!--         <template #tooltip>
            <div class="grid">
              <p class="flex items-center gap-2 capitalize">Peaked {{ summoner.peakRank.peak }}</p>
              <p class="flex items-center gap-2 capitalize">Season {{ summoner.peakRank.season }}</p>
            </div>
          </template> -->
        </div>

        <div class="flex items-center gap-4 pl-0.5 font-normal">
          <span>#{{ summoner.tag }}</span>
          <span>#{{ summoner.region }}</span>
        </div>
      </div>

      <Grow />
    </div>
    <RecentPlayRate />
  </div>
</template>
<style scoped></style>

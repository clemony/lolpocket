<script lang="ts" setup>
const summoner = computed(() => ss().getSummoner(as().account?.puuid))
</script>

<template>
  <div
    v-if="summoner"
    class="flex gap-6 w-full items-center">
    <div class="flex gap-4 items-center">
      <SummonerIcon class="rounded-full size-12" />

      <div class="flex flex-col gap-px">
        <div class="flex items-center justify-between">
          <SummonerName
            class="!text-6 drop-shadow-sm font-serif text-bc/94 leading-none font-bold" />
          <!--           <LazyMostPlayedChampionAvatars  :summoner /> -->
        </div>
        <div class="flex items-center lowercase gap-4 font-normal">
          <SummonerTag :summoner />

          <SummonerRegion :region-id="summoner.region" />

          <SummonerLevel :summoner />
        </div>
      </div>
    </div>
  </div>
</template>

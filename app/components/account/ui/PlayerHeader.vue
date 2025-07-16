<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <div class=" pt-34 flex ">
  <div class="flex  w-120 h-fit items-center gap-5 ">
    <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0 relative">
      <LazySummonerIcon v-if="summoner" :summoner="summoner" class="size-19 rounded-full" />
    </div>

    <div class="flex flex-col grow justify-center gap-1.5 drop-shadow-sm">
      <div class="flex items-center gap-6">
        <SummonerName class="!text-8 font-serif leading-none grow font-bold" />

        <!--
          <img
            :src="`/img/crests/mini/${summoner.peakRank.peak}.png`"
            class="-ml-2.25 size-8 pt-0.75 drop-shadow-xs"
          />
 -->
      </div>

      <div class="flex items-center lowercase gap-4 pl-0.5 font-normal">
        <SummonerTag :summoner="summoner" />

        <SummonerRegion :region-id="summoner.region" />
      </div>
    </div>

    <div class="grid h-full items-center justify-items-end justify-self-end">
      <p class="pt-1.25">
        lv. {{ summoner.level }}
      </p>

      <UpdateMatchHistoryButton v-if="summoner" :summoner="summoner" class="" />
    </div>
  </div>
  </div>
</template>

<style scoped></style>

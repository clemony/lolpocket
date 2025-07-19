<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <div class="flex w-120 h-22 items-center  gap-6 ">
    <div class="relative grid justify-center justify-items-center">
      <LazySummonerIcon v-if="summoner" :summoner class="size-22 rounded-full relative" />
    </div>

    <div class="flex flex-col grow justify-center gap-1.5 drop-shadow-sm">
      <SummonerName class="!text-12 dst font-serif text-bc/94 leading-none grow font-bold" />

      <div class="flex items-center lowercase gap-4 pl-0.5 font-normal">
        <SummonerTag :summoner />

        <SummonerRegion :region-id="summoner.region" />

        <SummonerLevel :summoner />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const props = defineProps<{
  summoner: userAccount
}>()
</script>

<template>

    <div class="flex justify-end w-110 min-h-26 !h-26 items-center gap-5 ">

      <div class="flex flex-col justify-center items-end gap-1.5 drop-shadow-sm">
        <div class="flex items-center gap-6">
          <h1 class="!text-8 font-serif leading-none grow text-end font-bold">
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
      <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0">
        <ProfileSummonerIcon class="size-19 rounded-full" />
      </div>
    </div>

</template>

<style scoped></style>

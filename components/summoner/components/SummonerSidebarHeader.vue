<script setup lang="ts">
const props = defineProps<{
  summoner: userAccount
  class?: HTMLAttributes['class']
}>()

const summoner = ref(props.summoner)
</script>

<template>
  <div class="" :class="cn('flex flex-nowrap w-full gap-5', props.class)">
    <div class="flex flex-col justify-center gap-1.5 drop-shadow-sm">
      <div class="flex items-center gap-6">
        <h1 class="!text-8 font-serif leading-none font-bold grow">
   
        </h1>
        <p class="pt-1.25">
          lv. {{ summoner.summonerLevel }}
        </p>
      </div>

      <div class="flex items-center gap-4 pl-0.5 font-normal lowercase">
        <span>#{{ summoner.tagLine }}</span>
        <span>#{{ summoner.region }}</span>
      </div>
    </div>

    <div class="inset-shadow-sm inset-shadow-black/80 size-fit grid place-items-center rounded-full shadow-sm">
      <SummonerIcon class="rounded-full size-16 grayscale contrast-115 brightness-102 border-neutral border order-last" />
    </div>
  </div>
</template>

<style scoped></style>

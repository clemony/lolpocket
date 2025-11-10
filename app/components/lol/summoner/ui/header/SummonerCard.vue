<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
}>()
</script>

<template>
  <div class="flex w-full flex-col px-2 py-2">
    <div class="flex w-full items-center gap-4 border !bg-b1">
      <slot name="icon">
        <SummonerIcon class="ml-2 size-19 rounded-lg" />
      </slot>
      <div class="relative -mt-3 flex size-full flex-col gap-0.5">
        <div
          class="flex flex-nowrap items-center justify-between pr-3 text-nowrap">
          <SummonerName
            as="h1"
            class="center truncate font-serif leading-snug font-black" />

          <SummonerLevel class="mt-1" />
        </div>

        <div class="relative flex w-full items-center justify-between pr-0">
          <div class="flex items-center gap-3 justify-self-center">
            <SummonerTag />

            <SummonerRegion />
          </div>
          <span class="relative grid h-4 w-6 place-items-center">
            <slot name="button" />
          </span>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

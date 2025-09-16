<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
}>()
</script>

<template>
  <div class="w-full flex flex-col px-2 py-2">
    <div class="w-full !bg-b1 border flex items-center gap-4">
      <slot name="icon">
        <SummonerIcon class="rounded-lg ml-2 size-19" />
      </slot>
      <div class="size-full flex relative -mt-3 flex-col gap-0.5">
        <div
          class="flex justify-between text-nowrap flex-nowrap items-center pr-3">
          <SummonerName
            as="h1"
            class="font-serif font-black center leading-snug truncate" />

          <SummonerLevel class="mt-1" />
        </div>

        <div class="flex items-center justify-between w-full pr-0 relative">
          <div class="flex gap-3 justify-self-center items-center">
            <SummonerTag />

            <SummonerRegion />
          </div>
          <span class="h-4 w-6 grid place-items-center relative">
            <slot name="button" />
          </span>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

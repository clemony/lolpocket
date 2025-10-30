<script setup lang="ts">
const { puuid, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  puuid: string
}>()
const isOpen = shallowRef<boolean>(false)

/* const state = useSummonerProvider(puuid) */
</script>

<template>
  <LazyPopoverContent
    align="start"
    class="px-3 py-2">
    <PopoverArrow
      variant="base"
      class="*:last:fill-b1" /><!--
      :summoner="state.summoner.value" -->
    hi wtf
    <!--     <SummonerCardSmall
      full-width
      base="btn"
      hover="btn"
      size="xl"
      variant="ghost"
      class=" [&_h1]:!text-7 group/b pl-1 *:justify-between *:not-first:py-1.5 ">
      <icon
        name="arrow-ne"
        class="text-bc/50 group-hover/b:text-bc -translate-y-px translate-x-1" />
    </SummonerCardSmall> -->
    <Separator class="-mx-3 my-2 justify-self-center" />
    <!--     <SummonerToolbar
      warning
      :summoner="state.summoner.value"
      tooltip-placement="bottom"
      class="grid w-full grid-cols-4 gap-1" /> -->
  </LazyPopoverContent>
</template>
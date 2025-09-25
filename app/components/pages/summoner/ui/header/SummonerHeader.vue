<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
}>()
</script>

<template>
  <IconHeader>
    <template #icon>
      <LazySummonerIcon
        :summoner
        class="rounded-full size-full absolute   relative !size-22 mt-2.5" />
    </template>

    <!-- header name -->
    <template #title>
      <SummonerName
        as="h1"
        class="drop-shadow-sm font-serif text-bc/94 leading-none text-[2.6rem]" />
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <SummonerTag :summoner />
      <SummonerRegion :region-id="summoner?.region" />

      <SummonerLevel :summoner />
    </template>
  </IconHeader>
</template>

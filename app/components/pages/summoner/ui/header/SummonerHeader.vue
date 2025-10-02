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
  <IconHeader class="-ml-6">
    <template #icon>
      <SummonerIcon
        class="size-20 rounded-full mt-2 ml-6"
        :summoner />
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
      <!--       <SummonerRegion :region-id="summoner?.region" /> -->

      <SummonerLevel :summoner />
    </template>
  </IconHeader>
</template>

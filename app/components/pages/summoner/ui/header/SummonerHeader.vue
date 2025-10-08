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
  <IconHeader class="gap-6">
    <template #icon>
      <SummonerIcon
        class="size-20 rounded-full mt-2"
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
      <div class="flex items-center gap-4 px-0.5">
        <SummonerTag :summoner />
        <!--       <SummonerRegion :region-id="summoner?.region" /> -->

        <SummonerLevel :summoner />
      </div>
    </template>
  </IconHeader>
</template>

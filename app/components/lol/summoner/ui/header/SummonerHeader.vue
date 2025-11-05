<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner | Partial<Summoner>
}>()
</script>

<template>
  <IconHeader class="gap-6">
    <template #icon>
      <SummonerIcon
        class="mt-2 size-20 rounded-full"
        :summoner />
    </template>
    <!-- header name -->
    <template #title>
      <SummonerName
        as="h1"
        class="text-bc/94 font-serif text-[2.6rem] leading-none drop-shadow-sm" />
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

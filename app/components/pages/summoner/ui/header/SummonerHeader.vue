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
        class="rounded-full relative size-20 mt-3" />
    </template>

    <!-- header name -->
    <template #title>
      <SummonerName
        as="h1"
        class="drop-shadow-sm font-serif text-bc/94 leading-none text-[2.6rem]" />

      <div class="flex items-center gap-2 mt-0.75">
        <UpdateSummoner
          :summoner
          text
          size="sm"
          variant="shadow"
          class="w-22 h-9  border-b4/80" />
        <FollowButton
          :summoner
          variant="shadow"
          class="size-9  border-b4/80" />
      </div>
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <SummonerTag :summoner />
      <SummonerRegion :region-id="summoner?.region" />

      <SummonerLevel :summoner />
    </template>
  </IconHeader>
</template>

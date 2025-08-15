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
        class="rounded-full relative size-20 mt-0" />
    </template>

    <!-- header name -->
    <template #title>
      <SummonerName
        as="h1"
        class="drop-shadow-sm font-serif text-bc/94 leading-none text-12" />

      <div class="flex gap-3  mt-0.75">
        <UpdateSummoner
          :summoner
          text
          size="xs"
          variant="shadow-outline"
          class="!max-h-7 h-7 w-18" />
        <FollowButton
          :summoner
          variant="shadow-outline"
          class="size-7 btn btn-shadow btn-square " />
      </div>
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <SummonerTag :summoner />
      <SummonerRegion
        :region-id="summoner?.region" />

      <SummonerLevel
        :summoner />
    </template>
  </IconHeader>
</template>
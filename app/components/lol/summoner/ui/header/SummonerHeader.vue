<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner | Partial<Summoner>
}>()
const open = shallowRef<boolean>(false)
</script>

<template>
  <IconHeader class="gap-6">
    <template #icon>
      <GlassSplashBrowser
        v-model:open="open"
        @update:splash="e => {
          accountUpdate({ splash: e })
          open = false
        }">
        <SummonerIcon
          class="pointer-events-auto size-20 rounded-full"
          :summoner />
      </GlassSplashBrowser>
    </template>
    <!-- header name -->
    <template #title>
      <SummonerName
        as="h1"
        :summoner
        class="font-serif text-[2.6rem] leading-none text-bc/94 drop-shadow-sm" />
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="flex items-center gap-4 px-0.5">
        <SummonerTag
          :summoner />
        <SummonerRegion :region-id="summoner?.region" />

        <SummonerLevel :summoner />
      </div>
    </template>
  </IconHeader>
</template>

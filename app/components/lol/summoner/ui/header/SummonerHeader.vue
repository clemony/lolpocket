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
          class="pointer-events-none size-20 rounded-full transition-all
          duration-500 ease-in-out group-hover/icon:brightness-40
          group-data-[state=open]/icon:brightness-40"
          :summoner />

        <icon
          name="images"
          class="
          pointer-events-none absolute z-2 size-6 text-nc! opacity-0
          transition-all duration-500 ease-in-out group-hover/icon:opacity-80
          group-data-[state=open]/icon:opacity-100
        " />
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

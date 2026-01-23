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
      <SummonerIcon
        class="pointer-events-none size-20 rounded-full transition-all
          duration-500 ease-in-out group-hover/icon:brightness-40
          group-data-[state=open]/icon:brightness-40"
        :summoner />

      <icon
        name="images"
        class="
          text-nc! pointer-events-none absolute z-2 size-6 opacity-0
          transition-all duration-500 ease-in-out group-hover/icon:opacity-80
          group-data-[state=open]/icon:opacity-100
        " />
    </template>
    <!-- header name -->
    <template #title>
      <SummonerName
        as="h1"
        :summoner
        class="text-bc/94 overflow-y-visible font-serif text-[31.200000000000003px]/15
          drop-shadow-sm" />
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

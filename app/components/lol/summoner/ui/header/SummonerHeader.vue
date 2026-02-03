<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const { summoner } = storeToRefs(s_session())

const open = shallowRef<boolean>(false)
</script>

<template>
  <IconHeader>
    <template #icon>
      <SummonerIcon
        class="pointer-events-none size-20 rounded-full transition-all duration-500 ease-in-out group-open/icon:brightness-40 group-hover/icon:brightness-40"
        :summoner
      />

      <icon
        class="pointer-events-none absolute z-2 size-6 text-nc! opacity-0 transition-all duration-500 ease-in-out group-open/icon:opacity-100 group-hover/icon:opacity-80"
        name="images"
      />
    </template>
    <!-- header name -->
    <template #title>
      <SummonerName
        class="overflow-y-visible font-normal! font-display text-[36px]/15 text-bc/94 "
        as="h1"
        :summoner
      />
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="flex items-center gap-4 px-0.5">
        <SummonerTag :summoner />
        <SummonerRegion :region-id="summoner?.region" />

        <SummonerLevel :summoner />
      </div>
    </template>
  </IconHeader>
</template>

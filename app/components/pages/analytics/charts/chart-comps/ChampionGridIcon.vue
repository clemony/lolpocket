<script setup lang="ts">
const { params } = defineProps<{
  params: any
}>()

const img = useImage()
</script>

<template>
  <div
    v-if="params.img"
    class="relative size-full">
    <div
      class="border-y-b4 border-r-b4 absolute inset-0 size-full rounded-none rounded-r-xl border-y border-r mask-l-from-60% bg-size-[220%] bg-position-[40%_24%] bg-no-repeat shadow-sm drop-shadow-sm"
      :style="{
        backgroundImage: `url('${img(getSplash(champKeyById(params.data.championId), 'centered'))}')`,
      }" />

    <Img
      class="absolute -top-1.5 z-2 h-full w-auto drop-shadow-sm drop-shadow-black/15"
      :src="`/img/mastery/banner/crest-and-banner-mastery-${params.data.level > 10 ? 10 : params.data.level}.webp`"
      alt="banner" />
  </div>

  <div
    v-else
    class="size-12 overflow-hidden rounded-lg shadow-sm drop-shadow-sm">
    <Champion
      :id="params.data.championId ?? params.data.id"
      class="size-12 scale-118"
      :alt="params.data.champion ?? params.data.name" />
  </div>
</template>

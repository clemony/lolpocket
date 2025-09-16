<script setup lang="ts">
const { params } = defineProps<{
  params: any
}>()

const img = useImage()
</script>

<template>
  <div
    v-if="params.img"
    class="size-full relative">
    <div
      class="rounded-none rounded-r-xl border-r border-y border-y-b4 shadow-sm border-r-b4 drop-shadow-sm size-full mask-l-from-60% bg-no-repeat bg-[40%_24%] inset-0 absolute bg-size-[220%]"
      :style="{
        backgroundImage: `url('${img(getSplash(ix().champKeyById(params.data.id), 'centered'))}')`,
      }"></div>

    <Img
      :img="`/img/mastery/banner/crest-and-banner-mastery-${params.data.level > 10 ? 10 : params.data.level}.webp`"
      alt="banner"
      class="absolute h-full w-auto z-2 -top-1.5 drop-shadow-sm drop-shadow-black/15" />
  </div>

  <div
    v-else
    class="overflow-hidden size-12 rounded-lg shadow-sm drop-shadow-sm">
    <ChampionIcon
      :id="params.data.championId ?? params.data.id"
      :alt="params.data.champion ?? params.data.name"
      class="size-12 scale-118" />
  </div>
</template>

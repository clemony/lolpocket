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
      class="rounded-none rounded-r-s drop-shadow-sm size-full after:absolute after:size-full after:bg-linear-to-r  after:from-b1  after:to-transparent  after:from-2%  after:to-66%  after:z-1  after:left-0 after:mtop-0 shadow-none bg-no-repeat bg-[40%_24%]  absolute  bg-size-[240%]  drop-shadow-none"
      :style="{
        backgroundImage: `url('${img(getSplash(ix().champKeyById(params.data.id), 'centered'))}')`,
      }">
    </div>
  </div>
  <div
    v-else
    class=" overflow-hidden size-12 rounded-lg shadow-sm drop-shadow-sm">
    <ChampionIcon
      :id="params.data.championId ?? params.data.id"
      :alt="params.data.champion ?? params.data.name"
      class="size-12 scale-118" />
  </div>
</template>

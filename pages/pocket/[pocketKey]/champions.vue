<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
})
const pocket = ref(props.pocket)


const quote = getQuote().replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<i>/g, ' ').replace(/<\/i>/g, ' ')
</script>

<template>
  <div class="size-full">
<div class="w-full px-18 mt-5 ">
  <p class="text-4 font-serif font-semibold w-full">{{quote}}</p>
</div>
  <div class="h-full w-full grid   gap-12 mt-8  overflow-hidden relative">

    <LazyPocketChampionGrid :pocket="pocket" />
  </div>
</div>
</template>

<style scoped></style>

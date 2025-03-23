<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
})
const ds = useDataStore()
const pocket = ref(props.pocket)

const quote = getQuote().replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<i>/g, ' ').replace(/<\/i>/g, ' ')
</script>

<template>
  <div class="h-full w-full grid  pl-10 gap-12 pt-8  overflow-hidden relative">

    <LazyPocketChampionGrid :pocket="pocket" />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const isShow = ref(false)
const quote = ref(null)
onMounted (async () => {
  quote.value = formattedQuote()
})
/* const props = defineProps<{
pocket: pocket
}>() */
const route = useRoute()
definePageMeta({
  props: true,
  section: 'pocket',
})

const {puuid} = defineProps<{
puuid?: string
}>()
const pocket = ref(getPocket(route.params.pocketKey))

const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)



const { data } = await useFetch('/api/champions-lite.json')
const cs = useChampStore()

const { filteredChampions } = useChampionFilter(Object.values(data.value) as ChampionLite[], cs.pChampionFilter)

</script>

<template>
  <div class="flex relative size-full overflow-hidden" >
    <PocketSidebar  />

<div class="size-full relative overflow-y-auto">
    <PocketTabs :pocket="pocket"
      :quote="quote"/>
    <LazyNuxtPage
      :pocket="pocket"
      :puuid="puuid"
      :champions="filteredChampions"/>
  </div>
  </div>
</template>

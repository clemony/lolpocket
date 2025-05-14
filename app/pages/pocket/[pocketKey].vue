<script setup lang="ts">
const { puuid } = defineProps<{
  puuid?: string
}>()
const emit = defineEmits(['update:hovered'])
const isShow = ref(false)

/* const props = defineProps<{
pocket: pocket
}>() */
const route = useRoute()
definePageMeta({
  props: true,
  section: 'pocket',
})

const pocket = ref(getPocket(route.params.pocketKey))

const { data: champ } = await useFetch<ChampionRecord>('/api/champions-lite.json')
const { data: item } = await useFetch<ItemRecord>('/api/items-lite.json')

const cs = useChampStore()
const championData = computed (() => Object.values(champ.value) as ChampionLite[])
const { filteredChampions } = useChampionFilter(Object.values(championData.value), cs.pChampionFilter)
</script>

<template>
  <div class="flex relative size-full overflow-hidden">
    <PocketSidebar :champion-data="champ" :item-data="item" />

    <div class="size-full relative overflow-y-auto">
      <LazyNuxtPage
        :pocket="pocket"
        :puuid="puuid"
        :champions="filteredChampions" />
    </div>
  </div>
</template>

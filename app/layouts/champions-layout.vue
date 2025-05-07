<script lang="ts" setup>
const { data } = await useFetch('/api/champions-lite.json')
const cs = useChampStore()

const { filteredChampions } = useChampionFilter(Object.values(data.value) as ChampionLite[], cs.championFilter)

</script>

<template>
  <div class="flex flex-col h-full w-screen max-w-screen relative overflow-hidden px-8 ">
    <ChampionFilters />

    <main class="overflow-y-auto grow relative h-full relative ">
      <slot :champions="filteredChampions" />
    </main>
  </div>
</template>
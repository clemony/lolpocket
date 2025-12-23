<script setup lang="ts">
definePageMeta({
  keepalive: true,
  layout: false,
  search: 'hidden'
})

// get route so we can detect puuid or slug
const route = useRoute()
console.log('🥸 - route:', route)

const params = ref<Identifier>(null)

// pass the ref, not the value
const api = useSummonerProvider()

watch(() => api.summoner.value, (newVal) => {
  if (!newVal)
    return
  if (!route.params.puuid)
    return

  navigateTo({
    name: 'summoner-region-slug',
    params: {
      region: newVal.region.toLowerCase(),
      slug: `${newVal.name.toLowerCase()}_${newVal.tag.toLowerCase()}`
    },
    replace: true
  })
})

watch(() => route.params?.champion_key, (v) => {
  if (v && v.length)
    ui().openChampionTab = String(v)
})
</script>

<template>
  <NuxtPage :api />
</template>
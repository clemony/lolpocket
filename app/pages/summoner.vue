<script setup lang="ts">
definePageMeta({
  layout: false,
  search: 'hidden'
})

// get route so we can detect puuid or slug
const route = useRoute()
console.log('🥸 - route:', route.name)

const params = ref<Identifier>(null)

watchEffect(() => {
  if (route.name === 'summoner-puuid') {
    params.value = { puuid: String(route.params.puuid) }
  }
  else if (route.name === 'summoner-region-slug') {
    const [name, tag] = route.params.slug.toString().split('_')
    params.value = {
      name: name.toLowerCase(),
      region: route.params.region.toString().toLowerCase(),
      tag: tag.toLowerCase(),
    }
  }
})

// pass the ref, not the value
const api = useSummonerProvider(params)
watch(() => api, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
watch(() => api?.summoner?.value, (newVal) => {
  if (newVal && route.params.puuid) {
    navigateTo({
      name: 'summoner-region-slug',
      params: {
        region: newVal.region.toLowerCase(),
        slug: `${newVal.name.toLowerCase()}_${newVal.tag.toLowerCase()}`
      },
      replace: true
    })
  }
})
</script>

<template>
  <NuxtPage :api />
</template>
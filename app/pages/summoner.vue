<script setup lang="ts">
definePageMeta({
  layout: false,
  search: 'hidden'
})

// get route so we can detect puuid or slug
const route = useRoute()
const ss = useSummonerStore()

// if the user hit /summoner/:puuid → resolve, redirect, and stop
if (route.params.puuid) {
  const res = await ss.resolveOrFetch(String(route.params.puuid))
  if (res?.region && res?.name && res?.tag) {
    navigateTo(
      `/summoner/${res.region.toLowerCase()}/${res.name.toLowerCase()}_${res.tag.toLowerCase()}`,
      { replace: true }
    )
  }
}

// if we're NOT in [puuid], we're in [slug] or deeper → initialize provider once
if (route.params.slug) {
  const [name, tag] = String(route.params.slug).split('_')
  const region = String(route.params.region).toLowerCase()

  const summoner = await ss.ensureSummoner({
    name: name.toLowerCase(),
    region,
    tag: tag.toLowerCase(),
  })

  await useSummonerProvider(summoner?.puuid)
}
</script>

<template>
  <NuxtPage />
</template>
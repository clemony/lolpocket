<script setup lang="ts">
definePageMeta({
  layout: false,
  search: 'hidden',
})

const route = useRoute()

const session = useSummonerSession()

onBeforeMount(async () => {
  const identifier = extractIdentifierFromRoute(route)
  console.log('🥸 - identifier:', identifier)
  if (!identifier) return

  const summoner = await resolveSummoner(identifier)
  session.setSummoner(summoner)

  if (session.summoner) {
    s_data().getMastery()
    s_data().getTimelines()
  }

  if (route.params.puuid) {
    navigateTo({
      name: 'summoner-region-slug',
      params: {
        region: summoner.region.toLowerCase(),
        slug: `${summoner.name.toLowerCase()}_${summoner.tag.toLowerCase()}`,
      },
      replace: true,
    })
  }
})
</script>

<template>
  <NuxtPage />
</template>
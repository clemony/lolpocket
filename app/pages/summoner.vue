<script setup lang="ts">
import { resolveSummoner } from "~/domain/summoner/resolveSummoner"
import { extractIdentifierFromRoute } from "~/domain/summoner/utils/extractIdentifierFromRoute"

definePageMeta({
  layout: false,
  search: "hidden",
})

const route = useRoute()

const session = sSession()

onBeforeMount(async () => {
  const identifier = extractIdentifierFromRoute(route)
  console.log("🥸 - identifier:", identifier)
  if (!identifier) return

  const summoner = await resolveSummoner(identifier)
  session.setSummoner(summoner)

  if (session.summoner) {
    sData().getMastery()
    sData().getTimelines()
  }

  if (route.params.puuid) {
    navigateTo({
      name: "summoner-region-slug",
      replace: true,
      params: {
        region: summoner.region.toLowerCase(),
        slug: `${summoner.name.toLowerCase()}_${summoner.tag.toLowerCase()}`,
      },
    })
  }
})
const { summoner } = storeToRefs(sSession())
</script>

<template>
  <NuxtPage />
</template>

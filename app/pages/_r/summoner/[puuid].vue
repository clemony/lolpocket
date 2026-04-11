<script setup lang="ts">
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

definePageMeta({
  name: "summoner",
  layout: false,
  search: false
})

const route = useRoute()
const puuid = String(route.params.puuid ?? "")

if (!puuid) {
  await navigateTo("/", { replace: true })
}

try {
  const store = summonerStore()
  let summoner = store.resolveByPuuid(puuid)

  // If cached identity is incomplete, force-refresh before redirecting.
  if (!summoner?.region || !summoner?.name || !summoner?.tag) {
    summoner = await store.ensureSummoner({ puuid, force: true })
  }

  if (!summoner) {
    await navigateTo("/", { replace: true })
  } else {
    const target = buildSummonerRootPath(summoner)
    if (target !== route.path) {
      await navigateTo(target, { replace: true })
    }
  }
} catch {
  await navigateTo("/", { replace: true })
}
</script>

<template>
  <div class="grid min-h-screen place-items-center p-6 text-sm text-muted">
    Resolving summoner and redirecting...
  </div>
</template>

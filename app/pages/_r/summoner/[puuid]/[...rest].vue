<script setup lang="ts">
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

definePageMeta({
  name: "summoner-resolver-subroute",
  layout: false,
  search: false,
})

const route = useRoute()
const puuid = String(route.params.puuid ?? "")
const rest = Array.isArray(route.params.rest)
  ? route.params.rest.join("/")
  : String(route.params.rest ?? "")

if (!puuid) {
  await navigateTo("/", { replace: true })
}

try {
  const store = sSummoner()
  let summoner = store.resolveByPuuid(puuid)

  if (!summoner?.region || !summoner?.name || !summoner?.tag) {
    summoner = await store.ensureSummoner({ puuid, force: true })
  }

  if (!summoner) {
    await navigateTo("/", { replace: true })
  } else {
    const root = buildSummonerRootPath(summoner)
    const target = rest ? `${root}/${rest}` : root

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

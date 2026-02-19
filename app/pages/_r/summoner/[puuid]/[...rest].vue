<script setup lang="ts">
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

definePageMeta({
  name: "summoner-resolver-subroute",
  layout: "default",
})

const route = useRoute()
const { finish, progress, start } = useLoadingIndicator()

onBeforeMount(async () => {
  start()

  try {
    const puuid = String(route.params.puuid ?? "")
    if (!puuid) {
      await navigateTo("/", { replace: true })
      return
    }

    const rest = Array.isArray(route.params.rest)
      ? route.params.rest.join("/")
      : String(route.params.rest ?? "")

    const store = sSummoner()
    let summoner = store.resolveByPuuid(puuid)

    if (!summoner?.region || !summoner?.name || !summoner?.tag) {
      summoner = await store.ensureSummoner({ puuid, force: true })
    }

    if (!summoner) {
      await navigateTo("/", { replace: true })
      return
    }

    const root = buildSummonerRootPath(summoner)
    const target = rest ? `${root}/${rest}` : root

    if (target === route.path) {
      await navigateTo("/", { replace: true })
      return
    }

    await navigateTo(target, { replace: true })
  } catch {
    await navigateTo("/", { replace: true })
  } finally {
    finish()
  }
})
</script>

<template>
  <UPage>
    <UPageBody icon="search" class="grid place-items-center">
      <UPageCard
        title="Loading..."
        description="Resolving summoner identity and redirecting.">
        <template #body>
          <UProgress v-model:model-value="progress" />
        </template>
      </UPageCard>
    </UPageBody>
  </UPage>
</template>

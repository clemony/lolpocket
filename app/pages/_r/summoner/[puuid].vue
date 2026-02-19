<script setup lang="ts">
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

definePageMeta({
  name: "summoner",
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

    const store = sSummoner()
    let summoner = store.resolveByPuuid(puuid)

    // If cached identity is incomplete, force-refresh before redirecting.
    if (!summoner?.region || !summoner?.name || !summoner?.tag) {
      summoner = await store.ensureSummoner({ puuid, force: true })
    }

    if (!summoner) {
      await navigateTo("/", { replace: true })
      return
    }

    const target = buildSummonerRootPath(summoner)
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

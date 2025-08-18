<script setup lang="ts">
definePageMeta({
  name: 'summoner',
  path: '/summoner/:region/:slug',

  meta: {
    title: 'Summoner Profile',
    section: 'summoner',
    search: false,
  },
})

const route = useRoute()

/* const { summoner, props, loading, error } = useHandleSummoner() */

const { childRoutes } = useChildRoutes('summoner')

const puuid = computed (() => as().userAccount?.riot?.puuid)

const state = ref<ReturnType<typeof useSummonerProvider> | null>(null)

provide(SummonerKey, state)

watch(puuid, async (newPuuid) => {
  if (!newPuuid)
    return
  const summoner = useSummonerProvider(newPuuid)
  await summoner.findSummoner()
  state.value = summoner
  console.log('state.value????: ', state.value.matches)
}, { immediate: true })

onBeforeRouteLeave(async () => {
  await useUpdateUserSettings(as().settings, as().userAccount.uuid)
})
</script>

<template>
  <MaskLayout
    v-if="state?.summoner">
    <!-- splash -->

    <template #background>
      <LazyBackgroundSplashFixed :background="(as().publicData?.splash ?? state.useChampions().top().splash).replace('centered', 'uncentered')" />
    </template>

    <!-- nav -->

    <template #mini-nav>
      <LazyMiniSummonerNav
        v-if="childRoutes && state?.links"
        :child-routes
        :links="state?.links"
        :summoner="unref(state?.summoner)" />
    </template>

    <!-- header -->
    <template #header>
      <SummonerHeader
        :summoner="unref(state?.summoner)"
        class="pt-5  col-start-2"
        size="lg" />
    </template>

    <template #tabs>
      <SummonerProfileTabs
        v-if="childRoutes && state.links"
        :child-routes
        :links="state?.links"
        :summoner="state?.summoner" />
    </template>

    <template #page>
      <LazyNuxtPage
        v-if="state"
        :key="route.name"
        :state>
      </LazyNuxtPage>
    </template>
    <template #footer>
      <SiteFooter />
    </template>
  </MaskLayout>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'summoner',
  path: '/summoner/:region/:slug',

  meta: {
    title: 'Summoner Profile',
    parent: '/summoner',
    search: false,
  },
})

const route = useRoute()

/* const { summoner, props, loading, error } = useHandleSummoner() */

const { childRoutes } = useChildRoutes('summoner')

const puuid = computed (() => as().account?.puuid)

const state = ref<ReturnType<typeof useSummonerProvider> | null>(null)
/* console.log('state: ', state.value.summoner) */

provide(SummonerKey, state)

watch(puuid, async (newPuuid) => {
  if (!newPuuid)
    return
  const summoner = useSummonerProvider(newPuuid)
  await summoner.findSummoner()
  state.value = summoner
  console.log('state.value????: ', state.value.matches)
}, { immediate: true })
</script>

<template>
  <SplashLayout
    v-if="state?.summoner">
    <!--     <Teleport
      to="#layout-header"
      defer>
      <SummonerDropdown :summoner="state.summoner" />
    </Teleport> -->
    <!-- splash -->

    <template #background>
      <LazyBackgroundSplashFixed :background="(as().publicData?.splash ?? state.useChampions().top().splash).replace('centered', 'uncentered')" />
    </template>

    <!-- nav -->

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
  </SplashLayout>
</template>

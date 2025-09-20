<script setup lang="ts">
definePageMeta({
  name: 'summoner',
  meta: {
    title: 'Summoner Profile',
    parent: '/summoner',
    search: false,
  },
  path: '/summoner/:region/:slug',
})

const route = useRoute()

/* const { summoner, props, loading, error } = useHandleSummoner() */

const { childRoutes } = useChildRoutes('summoner')

const puuid = computed(() => as().account?.puuid)

const state = ref<ReturnType<typeof useSummonerProvider> | null>(null)
/* console.log('state: ', state.value.summoner) */

provide(SummonerKey, state)

watch(
  puuid,
  async (newPuuid) => {
    if (!newPuuid)
      return
    const summoner = useSummonerProvider(newPuuid)
    await summoner.findSummoner()
    state.value = summoner
    console.log('state.value????: ', state.value.matches)
  },
  { immediate: true }
)
</script>

<template>
  <TabLayout
    v-if="state?.summoner"
    size="lg">
    <!--     <Teleport
      to="#layout-header"
      defer>
      <SummonerDropdown :summoner="state.summoner" />
    </Teleport> -->
    <!-- splash -->

    <template #background>
      <LazyBackgroundSplashFixed
        :background="
          (
            as().publicData?.splash ?? state.useChampions().top().splash
          ).replace('centered', 'uncentered')
        " />
    </template>

    <!-- nav -->

    <!-- header -->
    <template #header>
      <SummonerHeader
        :summoner="unref(state?.summoner)" />
    </template>

    <template #tabs>
      <SummonerProfileTabs
        v-if="childRoutes && state.links"
        :child-routes
        :links="state?.links"
        :summoner="state?.summoner" />
    </template>

    <div class="size-full overflow-y-auto relative">
      <div class="min-h-[calc(100vh-(var(--spacing)*64))] z-auto">
        <NuxtPage
          v-if="state"
          :key="route.name"
          :state />
      </div>
      <SiteFooter />
    </div>
  </TabLayout>
</template>

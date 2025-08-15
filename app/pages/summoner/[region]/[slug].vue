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
const puuid = unref(as().userAccount?.riot?.puuid)

/* const { matches, fetchSummoner, summoner } = useSummoner(as().userAccount?.riot?.puuid)

const { topChampion } = useSummonerChampions(
  as().userAccount?.riot?.puuid,
  matches.value || [],
  {
    mode: 'top',
    limit: 1,
  },
)

const { childRoutes } = useChildRoutes('summoner')
const links = computed (() => generateSummonerLinks(summoner.value))

provide('playerData', {
  summoner: summoner.value,
  matches: matches.value,
}) */

const summoner = ref<any>([])
const childRoutes = []
const links = []
const topChampion = { splash: '' }
</script>

<template>
  <TabLayoutWrapper
    v-if="summoner">
    <!-- splash -->

    <template #background>
      <BackgroundSplashFixed :background="(as().publicData?.splash ?? topChampion?.splash).replace('centered', 'uncentered')" />
    </template>

    <!-- nav -->

    <template #mini-nav>
      <MiniSummonerNav
        v-if="childRoutes && links"
        :child-routes
        :links
        :summoner />
    </template>

    <!-- header -->
    <template #header>
      <SummonerHeader
        :summoner
        class="pt-5  col-start-2"
        size="lg" />
    </template>

    <template #tabs>
      <SummonerProfileTabs
        v-if="childRoutes && links"
        :child-routes
        :links
        :summoner />
    </template>

    <template #page>
      <LazyNuxtPage
        v-if="summoner"
        :key="route.name"
        :summoner>
      </LazyNuxtPage>
    </template>
    <template #footer>
    </template>
  </TabLayoutWrapper>
</template>

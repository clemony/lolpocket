<script setup lang="ts">
import { MatchHistoryPageAside, ProfileSettingsAside } from '#components'

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

const { summoner, props, loading, error } = useHandleSummoner()

const { topChampion } = useSummonerChampions(
  summoner.value?.matches?.simplified || [],
  {
    mode: 'top',
    limit: 1,
  },
)

const aside = useAsideComponent()
</script>

<template>
  <TabsPageWrapper
    v-if="summoner"
    class="pb-64"
    :background="(as().publicData?.splash ?? topChampion?.splash).replace('centered', 'uncentered')">
    <template #aside>
      <component
        :is="aside"
        :summoner>
      </component>
    </template>

    <template #header>
      <SummonerHeader
        :summoner
        class="pt-5  col-start-2"
        size="lg" />
    </template>

    <!--     <template #collapsed-header>
      <SummonerDropdown :summoner />
      <UpdateSummoner
        :summoner
        class="shrink-0 size-14  btn-ghost btn-shadow-ghost"
        wrapper-class="" />
    </template> -->

    <template #tabs>
      <SummonerProfileTabs
        :summoner />
    </template>

    <template
      #page="{ show }">
      <LazyNuxtPage
        v-if="summoner"
        :key="route.name"
        :show
        :transition="{
          name: 'global-page-transition',
        }"
        :summoner>
      </LazyNuxtPage>
    </template>

    <SummonerSidebar
      variant="sidebar"
      side="left"
      collapsible="icon" />
  </TabsPageWrapper>
</template>

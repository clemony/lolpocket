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
  <div class="size-full ">
    <MiniSummonerPageNav :summoner />
    <TabsPageWrapper
      v-if="summoner"
      class=""
      :background="(as().publicData?.splash ?? topChampion?.splash).replace('centered', 'uncentered')">
      <template #header>
        <SummonerHeader
          :summoner
          class="pt-5  col-start-2"
          size="lg" />
      </template>

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
          :summoner>
        </LazyNuxtPage>
      </template>
    </TabsPageWrapper>
  </div>
</template>

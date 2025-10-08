<script setup lang="ts">
definePageMeta({
  name: 'summoner',
  title: 'Summoner',
  path: '/summoner/:region/:slug',
  search: 'hidden',
})

const route = useRoute()
const puuid = computed(() => as().account?.puuid)

const state = ref<ReturnType<typeof useSummonerProvider> | null>(null)

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
    <!-- splash -->

    <template #background>
      <LazyBackgroundSplashFixed
        :img="
          (
            as().publicData?.splash ?? state.champions().top().splash
          ).replace('centered', 'uncentered')
        " />
    </template>

    <!-- nav -->
    <template #menu>
      <!--    -->
    </template>

    <!-- crumb -->
    <template #crumb>
      <SummonerDropdown
        :summoner="state.summoner"
        class="-ml-4" />
    </template>

    <!-- header -->
    <template #header>
      <SummonerHeader
        :summoner="unref(state?.summoner)" />
    </template>
    <div class="w-full min-h-screen bg-b1">
      <NuxtPage
        v-if="state"
        :key="route.name"
        :state />
    </div>
    <UpFAB />
    <UpdateSummoner
      shape="circle"
      placement="left"
      size="xl"
      variant="outline"
      class="[&_svg]:size-4 fab  z-10 bg-b1/80 bottom-64 right-24 *:opacity-60 hover:*:opacity-100 !cursor-pointer !pointer-events-auto !size-16 backdrop-blur shadow-sm shadow-black/4" />
    <FollowButton
      :summoner="state.summoner"
      shape="circle"
      placement="left"
      size="xl"
      active="base"
      variant="outline"
      class="[&_svg]:size-4 fab  z-10 bg-b1/80 bottom-44 right-24 *:opacity-60 hover:*:opacity-100 !cursor-pointer !pointer-events-auto !size-16 backdrop-blur shadow-sm shadow-black/4" />
  </TabLayout>
</template>

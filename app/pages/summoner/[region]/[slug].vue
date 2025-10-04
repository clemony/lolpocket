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
      <UpdateSummoner
        shape="circle"
        placement="right"
        variant="base"
        class="[&_svg]:size-4 !size-11 p-0 " />

      <!--     <FollowButton
          placement="bottom"
          shape="circle"
          :summoner="state.summoner"
          variant="base"
          class=" !size-9 [&_svg]:size-4.5 border-0 ring ring-b3/60" /> -->
    </template>

    <!-- crumb -->
    <template #crumb>
      <SummonerDropdown :summoner="state.summoner" />
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
  </TabLayout>
</template>

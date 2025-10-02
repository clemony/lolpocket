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
        :background="
          (
            as().publicData?.splash ?? state.champions().top().splash
          ).replace('centered', 'uncentered')
        " />
    </template>

    <!-- nav -->
    <template #crumb>
      <div class="flex items-center gap-1 w-59">
        <UpdateSummoner
          :summoner="state.summoner"
          placement="bottom"
          tip
          circle
          shape="circle"
          variant="neutral"
          class="[&_svg]:size-4 !size-9 p-0 border-0" />

        <!--     <FollowButton
          placement="bottom"
          shape="circle"
          :summoner="state.summoner"
          variant="base"
          class=" !size-9 [&_svg]:size-4.5 border-0 ring ring-b3/60" /> -->
        <SummonerDropdown :summoner="state.summoner" />
      </div>
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
  </TabLayout>
</template>

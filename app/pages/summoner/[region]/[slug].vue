<script setup lang="ts">
definePageMeta({
  name: 'summoner',
  title: 'Summoner',
  path: '/summoner/:region/:slug',
  search: 'hidden',
})

const route = useRoute()

/* const { summoner, props, loading, error } = useHandleSummoner() */

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
    <!-- summoner menu -->
    <Teleport
      to="#breadcrumb-1"
      defer>
      <SummonerDropdown :summoner="state.summoner" />
    </Teleport>

    <!-- summoner utils -->
    <Teleport
      to="#navbar-right"
      defer>
      <div class="flex top-3 right-0 z-1  gap-3 items-center">
        <UpdateSummoner
          :summoner="state.summoner"
          circle
          variant="neutral"
          hover="neutral"
          class="size-9 rounded-full **:text-nc tracking-tight  hover:[&_svg]:scale-105  hover:scale-110 transition-all duration-300 " />
        <FollowButton
          :summoner="state.summoner"
          variant="ghost"
          class="!size-9 shrink-0  aspect-square hover:[&_svg]:scale-110  hover:!bg-b1 hover:border-b3  hover:shadow-sm shadow-black/5 hover:scale-110 transition-all duration-300  !bg-tint-b2/40 -bottom-2 -left-2 rounded-full" />
      </div>
    </Teleport>
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

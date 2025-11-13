<script setup lang="ts">
definePageMeta({
  name: "summoner",
  title: "Summoner",
  path: "/summoner/:region/:slug",
  search: "hidden",
});

const route = useRoute();
const puuid = computed(() => as().account?.puuid);

const state = ref<ReturnType<typeof useSummonerProvider> | null>(null);

provide(SummonerKey, state);

watch(
  puuid,
  async (newPuuid) => {
    if (!newPuuid) return;
    const summoner = useSummonerProvider(newPuuid);
    await summoner.findSummoner();
    state.value = summoner;
    console.log("state.value????: ", state.value.matches);
  },
  { immediate: true },
);
</script>

<template>
  <TabLayout v-if="state?.summoner" size="12">
    <!-- splash -->

    <template #background>
      <LazyBackgroundSplashFixed
        size="header"
        :img="
          (as().account?.splash ?? state.champions().top().splash).replace(
            'centered',
            'uncentered',
          )
        "
      />
    </template>

    <!-- nav -->
    <template #menu>
      <!--    -->
    </template>

    <!-- crumb -->
    <template #crumb>
      <SummonerDropdown :summoner="state.summoner" class="-ml-4" />
    </template>

    <!-- header -->
    <template #header>
      <SummonerHeader :summoner="unref(state?.summoner)" />
    </template>
    <div class="min-h-screen w-full bg-b1">
      <NuxtPage v-if="state" :key="route.name" :state />
    </div>
    <UpFAB />
    <UpdateSummoner
      shape="circle"
      placement="left"
      variant="outline"
      class="fab pointer-events-auto! right-24 bottom-64 z-10 size-16! cursor-pointer! bg-b1/80 shadow-sm shadow-black/4 backdrop-blur *:opacity-60 hover:*:opacity-100 [&_svg]:size-4"
    />
    <FollowButton
      :summoner="state.summoner"
      shape="circle"
      placement="left"
      on="base"
      variant="outline"
      class="fab pointer-events-auto! right-24 bottom-44 z-10 size-16! cursor-pointer! bg-b1/80 shadow-sm shadow-black/4 backdrop-blur *:opacity-60 hover:*:opacity-100 [&_svg]:size-4"
    />
  </TabLayout>
</template>

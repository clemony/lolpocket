<script lang="ts" setup>
useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogTitle: '[og:title]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterTitle: '[twitter:title]'
})
const route = useRoute('summoner-region-slug')
const ss = useSummonerStore()
const [name, tag] = String(route.params.slug).split('_')

const summoner = await ss.ensureSummoner({
  name: name.toLowerCase(),
  region: String(route.params.region).toLowerCase(),
  tag: tag.toLowerCase(),
})
const state = await useSummonerProvider(summoner?.puuid)
await state.findSummoner()
</script>

<template>
  <TabLayout>
    <!-- splash -->

    <template #background>
      <BgSplash
        v-once
        size="full"
        :img="state?.splash.value" />
    </template>

    <template #background-slice>
      <BgSplash
        v-once
        size="full"
        :img="state?.splash.value" />
    </template>

    <!-- nav -->
    <template #menu>
      <!--    -->
    </template>

    <!-- crumb -->
    <template #crumb>
      <SummonerDropdown
        :summoner="state?.summoner.value"
        class="-ml-4" />
    </template>

    <!-- header -->
    <template #header>
      <SummonerHeader :summoner="unref(state?.summoner)" />
    </template>
    <div class="min-h-screen w-full bg-b1">
      <NuxtPage />
    </div>
    <div class="fixed right-24 bottom-24 z-4 grid gap-4">
      <UpdateSummoner
        size="c-14"
        placement="left"
        variant="floating"
        class="[&_svg]:size-4.25" />

      <!--     <FollowButton
        v-tippy="{ content: as().settings.favorite_summoners.includes(summoner.puuid) ? 'hi' : 'no', theme: 'base', placement: 'left' }"
        :summoner
        size="c-14" /> -->

      <Button
        v-if="as().account.puuid === state?.summoner.value.puuid"
        variant="floating"
        size="c-14">
        <Icon
          name="gear"
          class="size-5" />
      </Button>
      <UpFAB />
    </div>
  </TabLayout>
</template>
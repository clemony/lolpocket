<script lang="ts" setup>
const route = useRoute()
const ss = useSummonerStore()

const [name, tag] = String(route.params.slug).split('_')
console.log('📎 - tag:', tag)
console.log('📎 - name:', name)
console.log('📎 - String(route.params.region).toLowerCase():', String(route.params.region).toLowerCase())
console.log('🔹 index keys:', [...ss.index.keys()])

const summoner = await ss.ensureSummoner({
  name: name.toLowerCase(),
  region: String(route.params.region).toLowerCase(),
  tag: tag.toLowerCase(),
})
const state = shallowRef(useSummonerProvider(summoner.puuid))
await state.value.findSummoner()

provide(SummonerKey, state)
</script>

<template>
  <TabLayout v-if="state?.summoner">
    <!-- splash -->

    <template #background>
      <BgSplash
        size="header"
        :img="
          (as().account?.splash ?? state.champions().top().splash).replace(
            'centered',
            'uncentered',
          )
        " />
    </template>

    <!-- nav -->
    <template #menu>
      <!--    -->
    </template>

    <!-- crumb -->
    <template #crumb>
      <SummonerDropdown
        :summoner="state.summoner.value"
        class="-ml-4" />
    </template>

    <!-- header -->
    <template #header>
      <SummonerHeader :summoner="unref(state?.summoner)" />
    </template>
    <div class="min-h-screen w-full bg-b1">
      <slot
        v-if="state"
        :key="route.name"
        :state />
    </div>
    <div class="fixed right-24 bottom-24 grid gap-4">
      <UpdateSummoner
        size="c"
        placement="left"
        variant="outline"
        class="
          pointer-events-auto! z-10 size-16! cursor-pointer! bg-b1/80 shadow-sm
          shadow-black/4 backdrop-blur
          *:opacity-60
          hover:*:opacity-100
          [&_svg]:size-4
        " />
      <FollowButton
        :summoner="state.summoner.value"
        size="c"
        placement="left"
        on="base"
        variant="outline"
        class="
          pointer-events-auto! z-10 size-16! cursor-pointer! rounded-full!
          bg-b1/80 shadow-sm shadow-black/4 backdrop-blur
          *:opacity-60
          hover:*:opacity-100
          [&_svg]:size-4
        " />

      <UpFAB />

      <Button
        v-if="as().user.puuid === state.summoner.value.puuid"
        class="
          pointer-events-auto! z-10 size-16! cursor-pointer! rounded-full!
          bg-b1/80 shadow-sm shadow-black/4 backdrop-blur
          *:opacity-60
          hover:*:opacity-100
          [&_svg]:size-4
        ">
        <Icon
          name="gear"
          class="" />
      </Button>
    </div>
  </TabLayout>
</template>
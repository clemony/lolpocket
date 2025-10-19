<script lang="ts" setup>
definePageMeta({
  name: 'pocket_key',
  props: true,
  redirect: '/pocket/:pocket_key/champions',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))

const { syncIfDirty } = useSupabaseSync(
  () => pocket.value, // <- keep it reactive
  '/api/pockets',
  (userId, value) => ({ pocket: value }),
  PocketSchema
)

async function testSync() {
  console.log('🌱 - testSync fired')
  await syncIfDirty()
  console.log('🌱 - sync forced!')
}

const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value.main?.runes)
)

const selectedSet = computed(() => {
  const s = pocket.value.spells?.find(s => s.id === pocket.value.main?.spells)
  if (!s)
    return null
  const { id, ...rest } = s
  return rest
})
</script>

<template>
  <TabLayout
    v-if="pocket"
    size="lg">
    <template #crumb>
      <PocketMenubar />
    </template>

    <!-- splash -->

    <template #background>
      <BackgroundSplashFixed
        v-memo="[pocket.icon]"
        :img="pocket.icon.replace('tile', 'centered') ?? null" />
    </template>

    <template #background-slice>
      <BackgroundSplashFixed
        v-memo="[pocket.icon]"
        :img="pocket.icon.replace('tile', 'centered') ?? null" />
    </template>

    <template #header>
      <PocketHeader :pocket="pocket" />
    </template>

    <div class="w-4/5 px-14 justify-self-center z-auto grid bg-b1 min-h-screen">
      <ButtonGroup
        class="fixed right-6 border-b3/80 border rounded-xl  shadow-sm flex flex-col top-93 "
        orientation="vertical">
        <MainChampionPopover
          side="right"
          align="start" />
        <MainRuneSelect
          :pocket
          side="right"
          align="start" />
        <MainSpellSelect
          side="right"
          align="start"
          :pocket />
        <MainPositionSelect
          side="right"
          align="start"
          :pocket />
      </ButtonGroup>

      <NuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>

    <!--
  -->

    <!--   -->
  </TabLayout>
</template>

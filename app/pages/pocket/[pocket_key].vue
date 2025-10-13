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
      <PocketSwitcher />
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

    <div class="w-4/5 px-14 justify-self-center z-auto grid  bg-b1">
      <div class="w-full pb-10 pt-18 ">
        <div class="h-26 flex inset-x-0 @container gap-5">
          <MainChampionPopover />

          <LazyMainRuneSelect
            :pocket />

          <LazyMainSpellSelect
            :pocket />
          <MainPositionSelect
            :pocket />
          <Card class="basis-1/5 h-full shrink-0" />
        </div>
      </div>

      <Dock
        :magnification="40"
        class="fixed left-10 top-93 py-5"
        orientation="vertical">
        <DockIcon>
          <MainChampionPopover
            side="right"
            align="start"
            type="btn" />
        </DockIcon>
        <DockIcon>
          <MainRuneSelect
            :pocket
            side="right"
            align="start"
            type="btn" />
        </DockIcon>
        <DockIcon>
          <MainSpellSelect :pocket>
            <SelectTrigger class="rounded-full size-14 aspect-square  grid place-items-center relative">
              <Spell
                v-for="spell, i in selectedSet"
                :key="i"
                :name="spell"
                :class="cn('size-full pointer-events-none absolute rounded-full', { '-mask-linear-55 mask-linear-from-40% mask-linear-to-58%': i === 'f' })" />
            </SelectTrigger>
          </MainSpellSelect>
        </DockIcon>
        <DockIcon>
          <MainPositionSelect
            side="right"
            align="start"
            type="btn"
            :pocket />
        </DockIcon>
      </Dock>

      <NuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>

    <!--
  -->

    <!--   -->
  </TabLayout>
</template>

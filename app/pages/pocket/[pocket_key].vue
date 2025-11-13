<script lang="ts" setup>
import { PocketSchema } from '~~/shared/schema'

definePageMeta({
  name: 'pocket_key',
  props: true,
  redirect: '/pocket/:pocket_key/champions',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))

/* const { syncIfDirty } = useSupabaseSync(
  () => pocket.value,
  '/api/pockets',
  (userId, value) => ({ pocket: value }),
  PocketSchema
) */

/* async function testSync() {
  console.log('🌱 - testSync fired')
  await syncIfDirty()
  console.log('🌱 - sync forced!')
}
 */
const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value._runes),
)

const selectedSet = computed(() => {
  const s = pocket.value.spells?.find(
    s => s.id === pocket.value._spells,
  )
  if (!s)
    return null
  const { id, ...rest } = s
  return rest
})
</script>

<template>
  <TabLayout
    v-if="pocket && route.name !== 'pocket-core'"
    size="12">
    <template #crumb>
      <PocketMenubar />
    </template>

    <!-- splash -->

    <template #background>
      <BackgroundSplashFixed
        v-memo="[pocket.icon]"
        size="header"
        :img="pocket?.icon" />
    </template>

    <template #background-slice>
      <BackgroundSplashFixed
        v-memo="[pocket.icon]"
        size="header"
        slice
        :img="pocket?.icon" />
    </template>

    <template #header>
      <PocketHeader :pocket="pocket" />
    </template>

    <div class="z-auto grid min-h-screen w-4/5 justify-self-center bg-b1 px-14">
      <NuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>

    <!--
  -->

    <!--   -->
  </TabLayout>

  <div
    v-else
    class="h-screen w-screen">
    <NuxtPage
      v-if="pocket"
      :pocket="pocket" />
  </div>
</template>

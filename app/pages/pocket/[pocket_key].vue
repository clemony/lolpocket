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
        v-memo="pocket.icon"
        :background="pocket.icon.replace('tile', 'centered') ?? null" />
    </template>
    <template #icon></template>
    <template #header>
      <div class="flex items-center">
        <PocketHeader :pocket="pocket" />
        <PocketPinButton :pocket />
      </div>
    </template>

    <template #after-tabs>
      <PocketUtilitiesMenu :pocket />
    </template>

    <template #header-right>
      <!--   <PocketHeaderRight /> -->
    </template>

    <div class="size-full pl-32 relative gap-6 overflow-hidden flex bg-b1">
      <PocketSidebar>
        <Button
          variant="btn"
          @click="syncIfDirty()">
          sync
        </Button>
      </PocketSidebar>
      <NuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>
  </TabLayout>
</template>

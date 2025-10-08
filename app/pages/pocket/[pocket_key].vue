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

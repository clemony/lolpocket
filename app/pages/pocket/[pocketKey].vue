<script lang="ts" setup>
definePageMeta({
  level: 0,
  props: true,
})

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value
console.log('🌱 - pocket:', pocket)

const { syncIfDirty } = useSupabaseSync(
  () => pocket,
  '/api/pockets',
  value => ({ pocket: value }),
  PocketSchema,
)

watch(() => route.path, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <TabLayout
    v-if="pocket">
    <!-- splash -->

    <template #background>
      <BackgroundSplashFixed
        v-memo="pocket.icon"
        :background="pocket.icon.replace('tile', 'centered') ?? null" />
    </template>
    <template #icon>
    </template>
    <template #header>
      <div class="flex items-center">
        <PocketHeader
          :pocket="pocket" />
        <PocketPinButton :pocket />
      </div>
    </template>

    <template #tabs>
      <PocketTabs :pocket />
    </template>

    <template #after-tabs>
      <PocketUtilitiesMenu :pocket />
    </template>

    <template #header-right>
    <!--   <PocketHeaderRight /> -->
    </template>

    <div class="size-full px-32 gap-6 overflow-hidden flex bg-b1">
      <PocketSidebar>
        <Button
          variant="btn"
          @click="syncIfDirty()">
          sync
        </Button>
      </PocketSidebar>
      <LazyNuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>
  </TabLayout>
</template>

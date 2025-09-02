<script lang="ts" setup>
definePageMeta({
  name: 'pocket',
  level: 0,
  props: true,
})

const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocketKey)))
console.log('🌱 - pocket:', pocket)
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
      <LazyIconPopover
        v-memo="pocket.icon"
        class="size-24 shadow-md  border-0"
        :pocket="pocket"
        align="start"
        :align-offset="-42"
        :side-offset="-16"
        popover-class="ml-6.5 mt-2 w-98" />
    </template>
    <template #header>
      <EditablePocketHeader
        icons
        :pocket="pocket"
        class="text-9 dst" />
    </template>
    <template #tabs>
      <PocketPageTabs :pocket />
    </template>

    <div class="size-full pl-44 pr-34 gap-6 overflow-hidden flex bg-b1">
      <PocketSidebar />
      <LazyNuxtPage
        v-if="pocket"
        :pocket="pocket" />
    </div>
  </TabLayout>
</template>

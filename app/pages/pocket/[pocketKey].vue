<script setup lang="ts">
const { pocketKey } = defineProps<{
  pocketKey: string
}>()
const emit = defineEmits(['update:hovered'])
const route = useRoute()

definePageMeta({
  props: true,
  path: '/pocket/:pocketKey',
  parent: '/pocket',
  level: 0,
})

const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocketKey)))
</script>

<template>
  <SplashLayout
    v-if="pocket">
    <!-- splash -->

    <template #background>
      <BackgroundSplashFixed :background="pocket.icon.replace('tile', 'centered') ?? null" />
    </template>

    <template #header>
      <IconHeader>
        <template #icon>
          <LazyIconPopover
            :pocket="pocket"
            align="start"
            :align-offset="22"
            :side-offset="8"
            popover-class="ml-6.5 mt-2 w-98" />
        </template>

        <template #pre-header>
          <NuxtLink
            class="hover:underline flex ml-3 -mb-px cursor-pointer tldr-20 underline-offset-2 items-center gap-2 normal-case"
            to="/backpack">
            <i-lol-backpack class="size-4.5 opacity-60" />
            Backpack
          </NuxtLink>
        </template>
        <template #title>
          <EditablePocketHeader
            icons
            :pocket="pocket"
            class="text-12 dst" />

          <span class="flex gap-3  mt-0.75">

          </span>
        </template>
      </IconHeader>
    </template>
    <template #tabs>
      <PocketPageTabs :pocket />
    </template>
    <PocketSidebar />

    <template #page>
      <div class="size-full bg-b1">
        <LazyNuxtPage
          :pocket="pocket" />
      </div>
    </template>
  </SplashLayout>
</template>

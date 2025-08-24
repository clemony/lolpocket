<script setup lang="ts">
const { puuid } = defineProps<{
  puuid?: string
}>()
const emit = defineEmits(['update:hovered'])
const isShow = ref(false)

/* const props = defineProps<{
pocket: pocket
}>() */
const route = useRoute()
definePageMeta({
  props: true,
  parent: '/pocket',
  search: false,
})

const pocket = ref(getPocket(route.params.pocketKey))
</script>

<template>
  <TabLayoutWrapper
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
  </TabLayoutWrapper>
</template>

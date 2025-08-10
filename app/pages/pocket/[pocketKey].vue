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

  meta: {
    section: 'pocket',
    search: false,
  },
})

const pocket = ref(getPocket(route.params.pocketKey))
</script>

<template>
  <TabsPageWrapper
    v-if="pocket"
    :background="pocket.icon.replace('tile', 'centered') ?? null">
    <template #icon>
      <LazyIconPopover
        :pocket="pocket"
        align="start"
        :align-offset="22"
        :side-offset="8"
        popover-class="ml-6.5 mt-2 w-98" />
    </template>

    <template #header>
      <EditablePocketHeader
        icons
        :pocket="pocket" />

      <span class="flex gap-3  mt-0.75">

      </span>
    </template>

    <template #pre-header>
      <NuxtLink
        class="hover:underline flex ml-3 -mb-px cursor-pointer tldr-20 underline-offset-2 items-center gap-2 normal-case"
        to="/backpack">
        <i-lol-backpack class="size-4.5 opacity-60" />
        Backpack
      </NuxtLink>
    </template>

    <template #tabs>
      <PocketPageTabs :pocket />
    </template>
    <PocketSidebar />
    <template
      #page="{ show }">
      <LazyNuxtPage
        :show
        :pocket="pocket" />
    </template>
  </TabsPageWrapper>
</template>

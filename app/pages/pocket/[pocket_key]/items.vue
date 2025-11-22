<script setup lang="ts">
import type { Pocket } from '#shared/schema'

const props = defineProps<{
  pocket: Pocket
}>()

useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogTitle: '[og:title]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterTitle: '[twitter:title]'
})

definePageMeta({
  name: 'pocket-items',
  title: 'items',
  order: 2,
  path: '/pocket/:pocket_key/items',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key)),
).value

const tabs = ref('items')

const tabValues = [
  {
    name: 'items',
    icon: 'bow',
    value: 'items',
  },

  {
    name: 'calculator',
    icon: 'calc',
    value: 'calculator',
  },
]
</script>

<template>
  <div class="z-auto size-full min-h-screen pt-22">
    <div class="z-auto flex w-full gap-16">
      <div class="z-auto w-2/5">
        <ItemsHeader />
        <div class="sticky -top-44 z-2 w-full self-start">
          <div
            class="
              scrollbar-none max-h-[calc(100vh-5.5rem)] overflow-x-visible
              overflow-y-auto pr-2
            ">
            <ItemSets :pocket="pocket" />
          </div>
        </div>
      </div>
      <div class="z-auto flex w-3/5 flex-col">
        <PocketItemFilters />
        <LazyDraggableItemList />
      </div>
    </div>
  </div>
</template>

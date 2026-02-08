<script lang="ts" setup>
definePageMeta({
  title: 'Items',
  description: 'A full list of items and stat details.',
  icon: 'lol:regen',
  navClass: 'size-5',
  path: '/library/items',
})

const route = useRoute()

const quote = computed(() => getRandom(itemQuotes))
const tabs = ref('/library/items')

onMounted(() => {
  tabs.value = route.path
})
</script>

<template>
  <SeparatorLayout :description="quote">
    <LayoutAsideSplit full-width>
      <template #aside>
        <ItemFilterSidebar />
      </template>

      <ItemRankFilter
        class="sticky top-38 -mt-2 mb-0 -ml-[5px] w-[calc(100%+10px)] bg-p0 pt-5 pb-6" />
      <LazyNuxtPage />
    </LayoutAsideSplit>

    <template #right>
      <Tabs
        v-model:model-value="tabs"
        class="**:pointer-events-auto"
        @update:model-value="navigateTo(tabs)">
        <TabsList class="grid h-10 w-80 max-w-120 grid-cols-2">
          <TabsTrigger value="/library/items">
            Grid
          </TabsTrigger>

          <TabsTrigger value="/library/items/list">
            List
          </TabsTrigger>

          <TabIndicator />
        </TabsList>
      </Tabs>
    </template>
  </SeparatorLayout>
</template>

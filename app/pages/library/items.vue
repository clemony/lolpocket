<script lang="ts" setup>
import { itemQuotes } from '~~/shared/appdata'

definePageMeta({
  title: 'Items',
  icon: 'bow',
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
  <SeparatorLayout
    :description="quote">
    <LayoutAsideSplit
      full-width>
      <template #aside>
        <ItemFilterSidebar />
      </template>

      <ItemRankFilter
        class="sticky top-38 pb-6 pt-5 w-[calc(100%+10px)] -mt-2 mb-0 -ml-[5px] bg-b1" />
      <LazyNuxtPage />
    </LayoutAsideSplit>

    <template #right>
      <Tabs
        v-model:model-value="tabs"
        class="**:pointer-events-auto"
        @update:model-value="navigateTo(tabs)">
        <TabsList
          base="indicator"
          class="grid grid-cols-2 h-10 max-w-120 w-80">
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

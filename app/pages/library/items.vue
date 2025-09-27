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
    <LayoutAsideSplit class="*:last:lg:max-w-full">
      <template #aside>
        <ItemFilterSidebar />
      </template>

      <ItemRankFilter
        class="sticky top-0" />
      <LazyNuxtPage />
    </LayoutAsideSplit>

    <template #right>
      <Tabs
        v-model:model-value="tabs"
        class="**:pointer-events-auto"
        @update:model-value="navigateTo(tabs)">
        <IndicatorTabsList class="grid grid-cols-2 h-10 max-w-120 w-80">
          <IndicatorTabsTrigger value="/library/items">
            Grid
          </IndicatorTabsTrigger>

          <IndicatorTabsTrigger value="/library/items/list">
            List
          </IndicatorTabsTrigger>

          <TabIndicator />
        </IndicatorTabsList>
      </Tabs>
    </template>
  </SeparatorLayout>
</template>

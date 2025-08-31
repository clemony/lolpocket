<script lang="ts" setup>
import { itemQuotes } from '~~/shared/appdata'

definePageMeta({
  title: 'Items',
  parent: '/library',
})

const route = useRoute()
const is = useItemStore()
const quote = computed (() => getRandom(itemQuotes))
const tabs = ref('/library/items')

const s = useItemFilterProvider()
console.log('🌱 - s:', s)
const state = ref(null)
watch(() => s, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
  if (newVal)
    state.value = s
})
onMounted (() => {
  state.value = s
  tabs.value = route.path
})
</script>

<template>
  <SeparatorLayout
    v-if="state"
    :description="quote">
    <LayoutAsideSplit class="*:last:lg:max-w-full">
      <template #aside>
        <ItemFilterSidebar />
      </template>

      <ItemRankFilter
        class="sticky top-0"
        :state />
      <LazyNuxtPage />
    </LayoutAsideSplit>

    <template #right>
      <Tabs
        v-model:model-value="tabs"
        class="**:pointer-events-auto "
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

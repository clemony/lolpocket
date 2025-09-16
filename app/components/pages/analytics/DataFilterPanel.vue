<script lang="ts" setup>
const tabs = ref('/data/items')
const route = useRoute()
onMounted(() => {
  tabs.value = route.path
})

const entries = [
  {
    name: 'Champions',
    value: '/data/champions',
  },
  {
    name: 'Items',
    value: '/data/items',
  },
  {
    name: 'Allies',
    value: '/data/allies',
  },
]
</script>

<template>
  <div class="px-6 pb-4 pt-16 bg-b2/40 flex items-center w-full">
    <h1 class="dst">
      Champion Analysis
    </h1>

    <PatchNumberField />

    <div class="w-full">
      <Tabs
        v-model:model-value="tabs"
        class="max-w-100">
        <IndicatorTabsList class="grid-cols-3 *:!text-sm">
          <IndicatorTabsTrigger
            v-for="tab in entries"
            :key="tab.name"
            :value="tab.value"
            contrast>
            {{ tab.name }}
          </IndicatorTabsTrigger>

          <TabIndicator contrast />
        </IndicatorTabsList>
      </Tabs>
    </div>
  </div>
</template>

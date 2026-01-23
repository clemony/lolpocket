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
  <div class="bg-b2/40 flex w-full items-center px-6 pt-16 pb-4">
    <h1 class="dst">
      Champion Analysis
    </h1>

    <PatchNumberField />

    <div class="w-full">
      <Tabs
        v-model:model-value="tabs"
        class="max-w-100">
        <TabsList

          class="*:text-md! grid-cols-3">
          <TabsTrigger
            v-for="tab in entries"
            :key="tab.name"
            :value="tab.value"
            contrast>
            {{ tab.name }}
          </TabsTrigger>

          <TabIndicator contrast />
        </TabsList>
      </Tabs>
    </div>
  </div>
</template>

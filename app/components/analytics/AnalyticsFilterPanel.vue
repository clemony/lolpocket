<script lang="ts" setup>
const tabs = ref('/analytics/items')
const route = useRoute()
onMounted (() => {
  tabs.value = route.path
})
</script>

<template>
  <div class="w-100 px-6 py-4">
    <div class="w-full">
      <h2>Analytics</h2>
      <Tabs v-model:model-value="tabs" class="mt-4">
        <IndicatorTabsList class="grid-cols-2">
          <IndicatorTabsTrigger value="/analytics/items">
            Items
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/analytics/champions">
            Champions
          </IndicatorTabsTrigger>
          <TabIndicator />
        </IndicatorTabsList>
      </Tabs>
    </div>
    <PatchNumberField />

    <Popover>
      <PopoverTrigger class="btn w-55">
        hi ajflsjflsjf hih ih hi
      </PopoverTrigger>
      <ScrollPopperContent class="w-55">
        <p v-for="index in 40" :key="index">
          hi
        </p>
      </ScrollPopperContent>
    </Popover>
  </div>
</template>
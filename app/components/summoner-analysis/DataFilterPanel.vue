<script lang="ts" setup>
const tabs = ref('/data/items')
const route = useRoute()
onMounted (() => {
  tabs.value = route.path
})
</script>

<template>
  <div class="w-100 px-6 pb-4 pt-16 bg-b2/40 h-full">
    <PatchNumberField />
    <div class="w-full">
      <Tabs v-model:model-value="tabs" class="" >
        <IndicatorTabsList class="grid-cols-3 *:!text-3">
          <IndicatorTabsTrigger value="/data/items">
            Items
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/data/champions">
            <i-lol-champ class="size-5" />
            Champions
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/data/allies">
            Allies
          </IndicatorTabsTrigger>
          <TabIndicator  class="" />
        </IndicatorTabsList>
      </Tabs>
    </div>
  </div>
</template>
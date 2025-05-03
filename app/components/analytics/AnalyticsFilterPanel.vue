<script lang="ts" setup>
const tabs = ref('/analytics/items')
const route = useRoute()
onMounted (() => {
  tabs.value = route.path
})
</script>

<template>
  <div class="w-90 px-6 pb-4 pt-16 bg-b2/40 h-full">
    <div class="w-full">
      <Tabs v-model:model-value="tabs" class="mt-4 w-full" orientation="vertical">
        <IndicatorTabsList class="!w-full grid *:h-16 justify-start *:font-semibold *:tracking-tight *:w-full  *:text-4 *:not-last:dst gap-2 *:justify-start"  orientation="vertical">
          <IndicatorTabsTrigger value="/analytics/items" >
            Items
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/analytics/champions" >
            <i-lol-champ class="size-5"  />
            Champions
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/analytics/allies" >
            Allies
          </IndicatorTabsTrigger>
          <TabIndicator   orientation="vertical" class="" />
        </IndicatorTabsList>
      </Tabs>
    </div>
    <PatchNumberField />

  
  </div>
</template>
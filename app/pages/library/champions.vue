<script setup lang="ts">
definePageMeta({
  title: 'Champions',
  icon: 'lol-champ',
  path: '/library/champions',
})
// const { filters, setFilter, filtered } = useItemFilter()

const tabs = ref('grid')
</script>

<template>
  <div class="size-full overflow-y-auto">
    <Tabs
      v-model:model-value="tabs"
      class="flex flex-col px-8 size-full relative"
      as="div">
      <!-- <ChampionFilters>
        <IndicatorTabsList class="w-80 shrink-0  **:pointer-events-auto grid grid-cols-2 h-10 border !border-b3/70 bg-b2">
          <IndicatorTabsTrigger
            value="grid"
            :class="{ '!text-nc': tabs==='grid' }">
            Grid
          </IndicatorTabsTrigger>

          <IndicatorTabsTrigger
            value="list"
            :class="{ '!text-nc': tabs==='list' }">
            List
          </IndicatorTabsTrigger>

          <TabIndicator contrast />
        </IndicatorTabsList>
      </ChampionFilters> -->

      <TabsContent
        value="grid"
        as-child>
        <!--         <LibraryChampions
          v-if="championKeys"
          :champion-keys="championKeys"
          :filtered-keys="filteredKeys" /> -->
      </TabsContent>

      <TabsContent
        value="list"
        as-child>
        <!--   <LibraryChampionGrid :filtered /> -->
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped></style>

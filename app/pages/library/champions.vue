<script setup lang="ts">
definePageMeta({
  title: 'Champions',
  description: 'A detailed record of champions and their stats.',
  icon: 'lol:champ',
  listClass: '!size-5.5',
  navClass: 'size-5.5 ',
  path: '/library/champions',
})
// const { filters, setFilter, filtered } = useItemFilter()

const tabs = ref('grid')
</script>

<template>
  <div class="size-full overflow-y-auto">
    <Tabs
      v-model:model-value="tabs"
      class="relative flex size-full flex-col px-8"
      as="div"
    >
      <!-- <ChampionFilters>
        <TabsList  class="w-80 shrink-0  **:pointer-events-auto grid grid-cols-2 h-10 border !border-b3/70 bg-b2">
          <TabsTrigger
            value="grid"
            :class="{ '!text-nc': tabs==='grid' }">
            Grid
          </TabsTrigger>

          <TabsTrigger
            value="list"
            :class="{ '!text-nc': tabs==='list' }">
            List
          </TabsTrigger>

          <TabIndicator contrast />
        </TabsList>
      </ChampionFilters> -->

      <TabsContent value="grid" as-child>
        <!--         <LibraryChampions
          v-if="championKeys"
          :champion-keys="championKeys"
          :filtered-keys="filteredKeys" /> -->
      </TabsContent>

      <TabsContent value="list" as-child>
        <!--   <LibraryChampionGrid :filtered /> -->
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped></style>

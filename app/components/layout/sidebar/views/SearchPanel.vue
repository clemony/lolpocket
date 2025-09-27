<script lang="ts" setup>
defineOptions({
  meta: {
    name: 'Search',
    class: 'size-5.5 ', // '!size-5.5  **:!stroke-[2]',
    icon: 'heart'// 'mage:search',
  },
})
const searchType = shallowRef('summoner')
</script>

<template>
  <!--   <Tabs
    v-model:model-value="searchType"
    as="div"
    class="relative grid px-2 space-y-2 w-full items-center auto-rows-min">

    <TabsContent
      value="summoner"
      class="w-full !flex flex-col items-start">
    </TabsContent>
  </Tabs> -->

  <div class="">
    <SidebarHeaderWrapper
      title="Search"
      class="border-b-transparent">
      <template #subheader>
        <!--         <Search
          v-if="searchType === 'summoner'"
          class="h-12 my-2" /> -->
      </template>
    </SidebarHeaderWrapper>
    <!--     <SummonerSearchUserContent v-if="searchType === 'summoner'" /> -->
  </div>
</template>

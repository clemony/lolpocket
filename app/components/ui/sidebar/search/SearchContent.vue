<script lang="ts" setup>
const searchType = shallowRef('summoner')
</script>

<template>
  <SidebarContentWrapper
    title="Search"
    class="border-b-transparent">
    <Tabs
      v-model:model-value="searchType"
      class="relative grid px-2 space-y-2 w-full items-center auto-rows-min">
      <IndicatorTabsList class="auto-cols-fr self-start grid-flow-col h-10 !bg-b2  text-2 ">
        <IndicatorTabsTrigger value="summoner">
          Summoner
        </IndicatorTabsTrigger>
        <IndicatorTabsTrigger value="site">
          Site
        </IndicatorTabsTrigger>
        <TabIndicator />
      </IndicatorTabsList>
      <SummonerSearchBox
        v-if="searchType == 'summoner'"
        class="h-12 my-2" />
      <SidebarInputWrapper
        v-else
        class="pr-2">
        <input
          type="text"
          class="size-full"
          placeholder="Search lolpocket..." />
      </SidebarInputWrapper>
      <TabsContent
        value="summoner"
        class="w-full !flex flex-col items-start">
        <SummonerSearchUserContent v-if="searchType == 'summoner'" />
      </TabsContent>
    </Tabs>
  </SidebarContentWrapper>
</template>
<script lang="ts" setup>
const searchType = shallowRef('summoner')
</script>

<template>
  <Tabs
    v-model:model-value="searchType"
    as="div"
    class="relative grid px-2 space-y-2 w-full items-center auto-rows-min">
    <SidebarHeaderWrapper
      title="Search"
      class="border-b-transparent">
      <template #subheader>
        <IndicatorTabsList
          class="auto-cols-fr self-start grid-flow-col h-10 !bg-b2 text-xs">
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
      </template>
    </SidebarHeaderWrapper>
    <TabsContent
      value="summoner"
      class="w-full !flex flex-col items-start">
      <SummonerSearchUserContent v-if="searchType == 'summoner'" />
    </TabsContent>
  </Tabs>
</template>

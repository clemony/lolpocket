<script lang="ts" setup>
const searchType = shallowRef('summoner')
</script>

<template>
  <SidebarContentWrapper
    title="Search"
    class="border-b-transparent">
    <template #header>
      <Tabs
        v-model:model-value="searchType"
        class="relative grid items-center">
        <IndicatorTabsList class="auto-cols-max grid-flow-col h-9 !bg-b2  absolute -right-2 text-2 pointer-events-auto ">
          <IndicatorTabsTrigger value="summoner">
            Summoner
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="site">
            Site
          </IndicatorTabsTrigger>
          <TabIndicator />
        </IndicatorTabsList>
      </Tabs>
    </template>

    <template #subheader>
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
    </template>

    <SidebarGroupContent class="w-full !flex flex-col items-start">
      <SummonerSearchUserContent v-if="searchType == 'summoner'" />
    </SidebarGroupContent>
  </SidebarContentWrapper>
</template>
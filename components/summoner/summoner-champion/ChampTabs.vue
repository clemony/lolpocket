<script setup lang="ts">
import { summoner } from 'shared/data/summonerData'

const ds = useDataStore()
const as = useAccountStore()
const ms = useMatchStore()
</script>

<template>


    <Tabs v-model:model-value="ms.championTabsQueue" class="w-110">
    <IndicatorTabsList class="bg-b2/60 w-full grid grid-cols-4 h-12 mb-4">
      <IndicatorTabsTrigger  :value="0" class="px-4">
        All
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger :value="420" class="">
        Solo/Duo
   
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger  :value="440" class="">
   Flex
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger  :value="400" class="">
        Normal
      </IndicatorTabsTrigger>
      <TabIndicator />
    </IndicatorTabsList>

 <ChampTabsContent  />
  </Tabs>
      

</template>

<style scoped></style>

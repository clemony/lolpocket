<script lang="ts" setup>
const ans = useAnalysisStore()
</script>

<template>
  <Tabs v-model="ans.patchSelect">
    <TabsList>
      <TabsTrigger :value="ds.currentPatch">
        {{ ds.currentPatch }}
      </TabsTrigger>
      <!--       <TabsTrigger :value="ans.previousPatch">
        {{ ans.previousPatch }}
      </TabsTrigger> -->
      <TabsTrigger v-for="patch in ans.previousPatch" :key="patch" :value="patch">
        {{ ans.previousPatch }}
      </TabsTrigger>
      <TabsTrigger :value="ans.patchSelect" class="data-[state=active]:bg-transparent  h-7 px-0 data-[state=active]:shadow-none" :class="{ 'data-[state=active]:bg-b1 data-[state=active]:text-bc data-[state=active]:shadow': ans.patchSelect != ds.currentPatch && ans.patchSelect != ans.previousPatch && ans.patchSelect }">
        <AnalysisPatchSelect />
      </TabsTrigger>
      <TabsTrigger value="season">
        S2025
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
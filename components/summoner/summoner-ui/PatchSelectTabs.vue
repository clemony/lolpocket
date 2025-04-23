<script lang="ts" setup>
const ms = useMatchStore()
</script>

<template>
  <Tabs v-model="ms.patchSelect">
    <TabsList>
      <TabsTrigger :value="ds.currentPatch">
        {{ ds.currentPatch }}
      </TabsTrigger>
      <!--       <TabsTrigger :value="ms.previousPatch">
        {{ ms.previousPatch }}
      </TabsTrigger> -->
      <TabsTrigger v-for="patch in ms.previousPatch" :key="patch" :value="patch">
        {{ ms.previousPatch }}
      </TabsTrigger>
      <TabsTrigger :value="ms.patchSelect" class="data-[state=active]:bg-transparent  h-7 px-0 data-[state=active]:shadow-none" :class="{ 'data-[state=active]:bg-b1 data-[state=active]:text-bc data-[state=active]:shadow': ms.patchSelect != ds.currentPatch && ms.patchSelect != ms.previousPatch && ms.patchSelect }">
        <AnalysisPatchSelect />
      </TabsTrigger>
      <TabsTrigger value="season">
        S2025
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
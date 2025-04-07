<script lang="ts" setup>
</script>

<template>
  <NuxtLayout name="sidebar-layout" class="w-[400px]" motionKey="calculator">
    <Tabs default-value="stats" class="mt-10">
      <div class=" px-4">
      <TabsList class="mb-6  w-full  grid grid-cols-3">

        <TabsTrigger value="stats">
          Stat Totals
        </TabsTrigger>
        <TabsTrigger value="effects">
          Item Effects
        </TabsTrigger>
        <TabsTrigger value="options">
          Options
        </TabsTrigger>
      </TabsList>
      </div>
      <TabsContent value="stats">
        <LazyCalculatorStatTotals />
      </TabsContent>
      <TabsContent value="effects">
        effects
      </TabsContent>
      <TabsContent value="options">
        <CalculatorMenu />
        <LazyCalculatorOptions />
      </TabsContent>
    </Tabs>
  </NuxtLayout>
</template>
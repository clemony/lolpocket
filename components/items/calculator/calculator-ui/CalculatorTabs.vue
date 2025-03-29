<script lang="ts" setup>
</script>

<template>
  <Tabs default-value="stats" class="mt-10 ">
    <TabsList class="mb-6 mx-6 *:px-6">
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
</template>
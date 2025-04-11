<script lang="ts" setup>
</script>

<template>
<div class="">
      <SidebarTitle>
        <button v-tippy="'Add Set'" class="btn btn-ghost top-4  absolute right-5 btn-square z-6" @click="createCalculatorSet()">
          <icon name="ph:rows-plus-bottom-light" class="dst size-6.5"/>
        </button>
      </SidebarTitle>
    <Tabs default-value="stats" class="mt-10">
      <div class=" px-4">
      <TabsList class="mb-8  w-full  grid grid-cols-3">

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
      <LazyTabsContent value="effects">
        effects
      </LazyTabsContent>
      <LazyTabsContent value="options">
        <CalculatorMenu />
        <LazyCalculatorOptions />
      </LazyTabsContent>
    </Tabs>
</div>
</template>
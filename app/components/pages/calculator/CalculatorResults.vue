<script lang="ts" setup>
const tab = ref('stats')
</script>

<template>
  <!--
      <div>
        <button v-tippy="'Add Set'" class="btn btn-ghost top-4  absolute right-5 btn-square z-6" @click="createCalculatorSet()">
          <icon name="ph:rows-plus-bottom-light" class="dst size-6.5"/>
        </button>
      </div> -->

  <div class="size-full px-3 pt-26">
    <Tabs class="" default-value="stats">
      <TabsList class="grid h-11 w-full max-w-110 grid-cols-3">
        <TabsTrigger value="stats">
          Stat Totals
        </TabsTrigger>

        <TabsTrigger value="effects">
          Item Effects
        </TabsTrigger>

        <TabsTrigger value="options">
          Options
        </TabsTrigger>

        <TabIndicator />
      </TabsList>

      <TabsContent class="bg-b1 mt-8 w-full rounded-lg" value="stats">
        <LazyCalculatorStatTotals />
      </TabsContent>

      <LazyTabsContent class="m-0" value="effects">
        effects
      </LazyTabsContent>

      <LazyTabsContent class="m-0" value="options">
        <CalculatorMenu />

        <LazyCalculatorOptions />
      </LazyTabsContent>
    </Tabs>
  </div>
</template>

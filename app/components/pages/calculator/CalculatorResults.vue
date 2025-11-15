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
    <Tabs
      default-value="stats"
      class="">
      <TabsList
        base="indicator"
        class="grid h-11 w-full max-w-110 grid-cols-3">
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

      <TabsContent
        value="stats"
        class="mt-8 w-full rounded-lg bg-b1">
        <LazyCalculatorStatTotals />
      </TabsContent>

      <LazyTabsContent
        value="effects"
        class="m-0">
        effects
      </LazyTabsContent>

      <LazyTabsContent
        value="options"
        class="m-0">
        <CalculatorMenu />

        <LazyCalculatorOptions />
      </LazyTabsContent>
    </Tabs>
  </div>
</template>

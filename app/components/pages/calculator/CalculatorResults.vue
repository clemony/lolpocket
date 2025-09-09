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

  <div class="size-full pt-26 px-3">
    <Tabs
      default-value="stats"
      class="">
      <IndicatorTabsList class="h-11  w-full max-w-110  grid grid-cols-3 ">
        <IndicatorTabsTrigger value="stats">
          Stat Totals
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="effects">
          Item Effects
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="options">
          Options
        </IndicatorTabsTrigger>

        <TabIndicator />
      </IndicatorTabsList>

      <TabsContent
        value="stats"
        class="mt-8 bg-b1 w-full rounded-lg">
        <LazyCalculatorStatTotals />
      </TabsContent>

      <LazyTabsContent
        value="effects"
        class="m-0 ">
        effects
      </LazyTabsContent>

      <LazyTabsContent
        value="options"
        class="m-0 ">
        <CalculatorMenu />

        <LazyCalculatorOptions />
      </LazyTabsContent>
    </Tabs>
  </div>
</template>
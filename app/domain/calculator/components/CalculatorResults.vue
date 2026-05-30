<script lang="ts" setup>
const tab = ref("stats")
</script>

<template>
  <!--
      <div>
        <button label="'Add Set'" class="btn btn-ghost top-4  absolute right-5 btn-square z-6" @click="createCalculatorSet()">
          <icon name="ph:rows-plus-bottom-light" class="ds-2xs size-6.5"/>
        </button>
      </div> -->

  <div class="size-full px-3 pt-26">
    <div class="" default-value="stats">
      <div class="grid h-11 w-full max-w-110 grid-cols-3">
        <div value="stats">Stat Totals</div>

        <div value="effects">Item Effects</div>

        <div value="options">Options</div>
      </div>

      <div class="mt-8 w-full rounded-lg bg-p0" value="stats">
        <LazyCalculatorStatTotals />
      </div>

      <div class="m-0" value="effects">effects</div>

      <div class="m-0" value="options">
        <CalculatorMenu />

        <LazyCalculatorOptions />
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()

function handleAZ() {
  if (ts.AZmodel == 2) {
    ts.AZmodel = 0
  }
  else {
    ts.AZmodel++
  }
  console.log('💠 - handleAZ - ts.AZmodel:', ts.AZmodel)
}

function handlePrice() {
  if (ts.priceModel == 2) {
    ts.priceModel = 0
  }
  else {
    ts.priceModel++
  }
  console.log('💠 - handleAZ - ts.AZmodel:', ts.priceModel)
}
</script>

<template>
<div class="w-full flex items-center border-b-b3 border-b absolute z-2 bg-b1/90 backdrop-blur-md gap-2 px-5">
  <div class="flex  items-center gap-2 py-3   grow">
  <button class="btn btn-md !text-4 font-normal rounded-lg items-center bg-b1"  @click="handleAZ()">
    <span class="dst"> abc</span>
    <transition-scale group class="size-6 grid place-items-center">
      <icon v-if="ts.AZmodel != 0" name="arrow-up" class="shrink-0 size-6 transition-all dst  duration-300" :class="{ '-scale-y-100': ts.AZmodel == 1 }" />
      <icon v-if="ts.AZmodel == 0" name="carbon:asleep" class="shrink-0 dst size-5 py-0.5 " />
    </transition-scale>
  </button>

  <button class="btn btn-md  rounded-lg !text-4 font-normal items-center bg-b1"  @click="handlePrice()">
    <icon name="fluent:tag-20-regular" class="shrink-0 size-6 dst" />
    <transition-scale group class="size-6 grid place-items-center">
      <icon v-if="ts.priceModel != 0" name="arrow-up" class="shrink-0 dst size-6 transition-all duration-300" :class="{ '-scale-y-100': ts.priceModel == 1 }" />
      <icon v-if="ts.priceModel == 0" name="carbon:asleep" class="shrink-0 dst size-5 py-0.5 " />
    </transition-scale>
  </button>




  </div>
  <div class="flex items-center gap-2">
  <LazyItemStatsDropdownButton  />
    <LazyItemCategoryDropdownButton  />
  </div>
    <ItemSearch
      placeholder="Search Items"
      input-class=" text-bc  "
      class=" shadow-none h-11 [&_svg]:size-4  rounded-lg "
    />
  </div>
</template>

<style>
</style>

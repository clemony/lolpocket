<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()

function handleAZ() {
  if (is.AZmodel == 2) {
    is.AZmodel = 0
  }
  else {
    is.AZmodel++
  }
  console.log('💠 - handleAZ - is.AZmodel:', is.AZmodel)
}

function handlePrice() {
  if (is.priceModel == 2) {
    is.priceModel = 0
  }
  else {
    is.priceModel++
  }
  console.log('💠 - handleAZ - is.AZmodel:', is.priceModel)
}
</script>

<template>
  <div class="w-full top-0 bg-b1/94 flex items-center border-b-b3 border-b absolute z-2 bg-b1/90 backdrop-blur-sm gap-2 px-5 py-2">
    <div class="flex  items-center gap-2 py-3   grow">
      <slot />
      <button class="btn btn-xl !text-4 hover:bg-b2/50 font-normal items-center bg-b1" @click="handleAZ()">
        <span class="dst"> abc</span>
        <transition-scale group class="size-6 grid place-items-center">
          <icon v-if="is.AZmodel != 0" name="arrow-up" class="shrink-0 size-6 transition-all dst  duration-300" :class="{ '-scale-y-100': is.AZmodel == 1 }" />
          <icon v-if="is.AZmodel == 0" name="carbon:asleep" class="shrink-0 dst size-5 py-0.5 " />
        </transition-scale>
      </button>

      <button class="btn bg-b1 btn-xl  hover:bg-b2/50 !text-4 font-normal items-center " @click="handlePrice()">
        <icon name="fluent:tag-20-regular" class="shrink-0 size-6 dst" />
        <transition-scale group class="size-6 grid place-items-center">
          <icon v-if="is.priceModel != 0" name="arrow-up" class="shrink-0 dst size-6 transition-all duration-300" :class="{ '-scale-y-100': is.priceModel == 1 }" />
          <icon v-if="is.priceModel == 0" name="carbon:asleep" class="shrink-0 dst size-5 py-0.5 " />
        </transition-scale>
      </button>
    </div>
    <div class="flex items-center gap-2">
      <LazyItemStatsDropdownButton />
      <LazyItemCategoryDropdownButton />
    </div>
    <ItemSearch
      placeholder="Search Items"
      input-class=" text-bc  "
      class=" shadow-none h-11 [&_svg]:size-4  rounded-lg " />
  </div>
</template>

<style>
</style>

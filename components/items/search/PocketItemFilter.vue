<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
const is = useItemStore()

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
    <ItemCommand>
    <div class="flex  items-center py-3 gap-1">
      <button class="btn bg-b1 h-9 rounded-lg w-12 px-2 font-normal text-3 items-center " @click.stop="handleAZ()" :class="{'text-bc/40 !bg-b2/10': is.AZmodel == 0, '!bg-b2/70': is.AZmodel == 1 || is.AZmodel == 2}">
        <span class="dst !tracking-wider">ab<span v-if="is.AZmodel == 0">c</span>
        </span>
   
          <icon v-if="is.AZmodel != 0" name="arrow-up" class="!shrink-0 !size-6 transition-all dst -mx-2 duration-100" :class="{ '-scale-y-100': is.AZmodel == 1 }" />
   
      </button>

      <button class="btn  px-2 rounded-lg h-9  font-normal w-12 text-3 items-center " @click.stop="handlePrice()"  :class="{'!bg-b2/10': is.priceModel == 0, '!bg-b2/70': is.priceModel == 1 || is.priceModel == 2}">
        <icon name="fluent:tag-20-regular" class="!shrink-0 !size-5 dst"  :class="{'text-bc/60': is.priceModel == 0}"/>
     
          <icon v-if="is.priceModel != 0" name="arrow-up" class="!shrink-0 dst !size-6 transition-all duration-300 -mx-2" :class="{ '-scale-y-100': is.priceModel == 1 }" />
    
      </button>
      
    </div>
    </ItemCommand>
    <Grow  />
    <ItemInfoPaneTrigger />
  </div>
</template>

<style>
</style>

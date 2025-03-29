<script lang="ts" setup>
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
  <button class="btn h-8 hover:!bg-b2 rounded-lg btn-xs  px-2 font-normal text-2 items-center " :class="{ '!bg-neutral hover:!bg-neutral/80  btn-neutral *:text-nc': is.AZmodel == 1 || is.AZmodel == 2 }" @click.stop="handleAZ()">
    <span class="dst !tracking-wider">ab<span v-if="is.AZmodel == 0">c</span>
    </span>

    <icon v-if="is.AZmodel != 0" name="arrow-up" class="!shrink-0 !size-6 transition-all dst -mx-2 duration-100" :class="{ '-scale-y-100': is.AZmodel == 1 }" />
  </button>

  <button class="btn   hover:!bg-b2  px-3  h-8 w-11 rounded-lg btn-xs   font-normal  text-3 items-center " :class="{ '!bg-neutral btn-neutral hover:!bg-neutral/80  *:text-nc': is.priceModel == 1 || is.priceModel == 2 }" @click.stop="handlePrice()">
    <icon name="tabler:tag" class="!shrink-0 !size-5 dst -scale-x-100" />

    <icon v-if="is.priceModel != 0" name="arrow-up" class="!shrink-0 dst !size-6 transition-all duration-300 -mx-2" :class="{ '-scale-y-100': is.priceModel == 1 }" />
  </button>
</template>
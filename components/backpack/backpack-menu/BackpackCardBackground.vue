<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const bgImg = computed (() => {
  return pocket.value.icon && pocket.value.icon == '/img/lp/192.webp' ? 'url(/img/bg/inventory_card.jpg)' : pocket.value.icon ? `url(${pocket.value.icon})` : `url(/img/champion-centered/${pocket.value.champions.default.id}_0.webp)`
})

const bgSize = computed (() => {
  return bgImg.value == 'url(/img/bg/inventory_card.jpg)' ? '100%' : '250%'
})

const bgX = computed (() => {
  return bgImg.value == 'url(/img/bg/inventory_card.jpg)' ? '10%' : '40%'
})
const bgY = computed (() => {
  return bgImg.value == 'url(/img/bg/inventory_card.jpg)' ? '100%' : '21%'
})
</script>

<template>
  <div
    class=" place-self-center size-full absolute z-0 top-0 left-0    rounded-xl border border-b2 shadow-sm overflow-hidden after:bg-radial-[at_75%_0] after:size-full after:absolute after:top-0 after:left-0 after:from-[#FFFFFF]/2  after:from-16%  after:via-[#FFFFFF]/88  after:via-48%  after:to-[#FFFFFF]  after:to-80% after:z-0" :style="{
      backgroundImage: bgImg,
      backgroundSize: bgSize,
      backgroundPositionX: bgX,
      backgroundPositionY: bgY,
    }"
    :class="{ 'grayscale opacity-70': bgImg == 'url(/img/bg/inventory_card.jpg)' }">
  </div>
</template>
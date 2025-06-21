<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const ix = useIndexStore()

const bgImg = computed (() => {
  return !pocket.value.icon ? '/img/bg/aurora-bg.webp' : pocket.value.icon ? `${pocket.value.icon.replace('tile', 'centered')}` : `${ix.centeredByKey(pocket.value.champions[0])}_0.webp`
})
</script>

<template>
  <div
    class="bg-linear-to-bl from-[#FFFFFF] place-self-center size-full absolute z-0 inset-0  pointer-events-none right-top-radial  rounded-xl border border-b2 shadow-sm overflow-hidden after:size-full after:z-1 after:absolute after:top-0 after:left-0">
    <Img
      :img="bgImg"
      alt="bg-image-pocket-splash"
      class="object-[3rem_3rem] absolute inset-0 scale-180"
      :class="{ 'grayscale opacity-70': bgImg == 'url(/img/bg/inventory_card.jpg)' }" />
  </div>
</template>

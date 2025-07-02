<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})


const bgImg = computed (() => {
  return  pocket.value.icon ? `${pocket.value.icon.replace('tile', 'centered')}` : null
})
</script>

<template>
  <div
    class="bg-linear-to-bl from-[#FFFFFF] place-self-center size-full absolute z-0 inset-0  pointer-events-none right-top-radial  rounded-xl border border-b2 shadow-sm overflow-hidden after:size-full after:z-1 after:absolute after:top-0 after:left-0">
    <Img
    v-if="bgImg"
      :img="bgImg"
      alt="bg-image-pocket-splash"
      class="object-[3rem_3rem] absolute inset-0 scale-180"/>
  </div>
</template>

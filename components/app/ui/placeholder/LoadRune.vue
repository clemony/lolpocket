<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  url: string
  keystone?: boolean
}>()
const isImageLoaded = ref<boolean>(false)
function imageLoaded() {
  setTimeout(() => {
    isImageLoaded.value = true
    console.log(isImageLoaded.value)
  }, 500)
}
</script>

<template>
  <Skeleton
    v-show="!isImageLoaded" class="rounded-full"
    :class="{ 'size-[45px]': !props.keystone, 'size-10 mr-2 opacity-60  ': props.keystone }"
  />

  <div
    v-show="isImageLoaded" class="rounded-full animate-in fade-in-0 "
    :class="{ 'ring-1 ring-neutral size-[45px]': !props.keystone, 'size-12': props.keystone }"
  >
    <img
      :src="props.url" class="scale-105 " :class="{
        'rounded-full shadow-inner shadow-neutral': !props.keystone, 'drop-shadow-md': props.keystone,
      }" @load="imageLoaded()"
    />
  </div>
</template>

<style scoped></style>

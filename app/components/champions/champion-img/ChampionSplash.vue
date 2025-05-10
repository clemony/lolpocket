<script setup lang="ts">
const { url, bgSize = '250%', class: className, name, top = '-25%', objectPosition = 'center',
}
  = defineProps<{
    url: string
    class?: HTMLAttributes['class']
    name?: string
    bgSize?: string
    top?: string
    objectPosition?: string
  }>()

const loaded = ref(false)
</script>

<template>
  <div
    class="" :class="cn('grid place-items-center  overflow-hidden  relative cursor-pointer  rounded-lg  size-full **:select-none  group relative', { 'inset-shadow-[0px_0px_10px_4px_#00000040]': loaded }, className)">
    <div class="size-full rounded-lg overflow-hidden">
      <Image
        :image="url"
        alt="champion image"
        class="absolute  object-cover rounded-lg object-center"
        :style="{
          width: bgSize,
          height: bgSize,
          top,
          objectPosition,
        }" preload />
      <slot />
      
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const { url, bgSize = 'cover', class: className, name, bgPosition = 'center'
}
  = defineProps<{
    url: string
    class?: HTMLAttributes['class']
    name?: string
    bgSize?: string
    bgPosition?: string
  }>()

const loaded = ref(false)
const image = useImage()
</script>

<template>
  <div
    class="size-full" :class="cn('grid place-items-center  overflow-hidden  relative cursor-pointer shadow-sm drop-shadow-sm bg-no-repeat rounded-lg  size-full **:select-none  group relative', { 'inset-shadow-[0px_0px_10px_4px_#00000040]': loaded }, className)"
    
    :style="{
      backgroundImage: `url(${image(url, {quality: 30})})`,
      backgroundSize: bgSize,
      backgroundPosition: bgPosition, }"
    >
      <slot />
      
    </div>

</template>

<style scoped></style>

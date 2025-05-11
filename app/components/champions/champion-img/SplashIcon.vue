<script lang="ts" setup>
const { img, class: className } = defineProps<{
  img: string
  class?: HTMLAttributes['class']
}>()

const image = useImage()
</script>

<template>
  <label
    alt="Champion Image"
    :style="{
      backgroundImage: `url(${image(img)})`,
      backgroundSize: img == '/img/lp/192.webp' ? '100%' : '450%',
      backgroundPosition: 'center 20%' }" class=""
    :class="cn('shadow-warm size-full has-checked:bg-b2/60 border-b2   shrink-0  overflow-hidden rounded-lg border has-checked:ring-1 has-checked:ring-offset-2 has-checked:ring-neutral has-checked:ring-offset-b1 hover:ring-1', className)">

    <slot />
  </label>
</template>

<style scoped>

</style>

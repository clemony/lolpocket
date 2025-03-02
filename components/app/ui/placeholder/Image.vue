<script lang="ts" setup>
const props = defineProps<{
  image: string
  alt: string
  class?: HTMLAttributes['class']
  imgClass?: string
}>()
</script>

<template>
  <!--   <nuxt-img
    v-slot="{ src, isLoaded, imgAttrs }"
    :src="props.image"
    :alt="props.alt"
    class=""
    :class="cn('size-full', props.class)"
    :custom="true" -->
  >
  <!-- Show the actual image when loaded -->
  <!--     <img
      v-if="isLoaded"
      v-bind="imgAttrs"
      :class="cn('', props.imgClass)"
      :src="src"
    />
 -->
  <!-- Show a placeholder while loading -->
  <!--     <Skeleton
      v-else
      :class="cn('size-full', props.class)"
      alt="placeholder"
    />
  </nuxt-img> -->
  h
</template>

<style scoped>

</style>
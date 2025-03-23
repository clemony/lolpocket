<script lang="ts" setup>
const props = defineProps<{
  image: string
  alt: string
  class?: HTMLAttributes['class']
  imgClass?: string
}>()
</script>

<template>
  <NuxtImg
    v-slot="{ src, isLoaded, imgAttrs }"
    :src="props.image"
    :alt="props.alt"
    class=""
    :class="cn('size-full', props.class)"
    :custom="true">
    <!-- Show the actual image when loaded -->

    <AnimatePresence
      multiple
      as="div"
      class="size-full">
      <Motion
        v-if="isLoaded"

        :initial="{ opacity: 0 }"
        :animate="{ opacity: 100 }"
        :transition="{
          duration: 1,
          x: { type: 'spring', stiffness: 260, damping: 20 },
        }"
        as-child>
        <img
          v-bind="imgAttrs"
          :class="cn('size-full', props.imgClass)"
          :src="src" />
      </Motion>
      <!-- Show a placeholder while loading -->
      <Motion
        v-else

        :initial="{ opacity: 100 }"
        :animate="{ opacity: 0 }"
        :transition="{
          duration: 1,
          x: { type: 'spring', stiffness: 260, damping: 20 },
        }"
        as-child>
        <Skeleton
          :class="cn('size-full', props.class)"
          alt="placeholder" />
      </Motion>
    </AnimatePresence>
  </NuxtImg>
</template>

<style scoped>

</style>
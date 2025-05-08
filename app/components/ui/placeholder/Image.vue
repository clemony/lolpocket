<script lang="ts" setup>
import { AnimatePresence, LayoutGroup, motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  image: string
  alt: string
  class?: HTMLAttributes['class']
  imgClass?: string
}>()

const emit = defineEmits(['loaded'])
</script>

<template>
  <LayoutGroup>
    <NuxtImg
      v-slot="{ src, isLoaded, imgAttrs }"
      v-bind="$attrs"
      :src="props.image"
      :alt="props.alt"
      class=""
      :class="cn('size-full', props.class)"
      :custom="true"
      @load="emit('loaded')">
      <!-- Show the actual image when loaded -->

      <AnimatePresence
        multiple
        as="div"
        mode="popLayout"
        class="size-full">
        <motion.img
          v-if="isLoaded"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: [0, 100] }"
          :transition="{
            duration: 0.3,
            type: 'easeIn',
          }"
          v-bind="imgAttrs"

          :img-attrs="{ ...imgAttrs, loading: 'lazy' }"
          :class="cn('size-full', props.imgClass)"
          :src="src" />

        <!-- Show a placeholder while loading -->
        <Motion
          v-else
          :animate="{ opacity: [100, 0] }"
          :transition="{
            duration: 0.3,
            type: 'easeOut',
          }"
          as-child>
          <Skeleton
            :class="cn('size-full', props.class)"
            alt="placeholder" />
        </Motion>
      </AnimatePresence>
    </NuxtImg>
  </LayoutGroup>
</template>

<style scoped>

</style>
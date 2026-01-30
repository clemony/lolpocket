<script lang="ts" setup>
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  image: string
  alt: string
  class?: HTMLAttributes['class']
  imgClass?: string
  quality?: number
}>()

const emit = defineEmits(['loaded'])
</script>

<template>
  <LayoutGroup>
    <NuxtImg
      v-slot="{ src, isLoaded, imgAttrs }"
      class=""
      v-bind="$attrs"
      :src="props.image"
      :alt="props.alt"
      :class="cn('size-full', props.class)"
      :custom="true"
      @load="emit('loaded')"
    >
      <!-- Show the actual image when loaded -->

      <AnimatePresence class="size-full" multiple as="div" mode="popLayout">
        <motion.div
          v-if="isLoaded"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: [0, 100] }"
          :transition="{
            duration: 0.3,
            ease: 'easeIn',
          }"
        >
          <img
            v-bind="imgAttrs"
            alt="img"
            :img-attrs="{ ...imgAttrs, loading: 'lazy' }"
            :class="cn('size-full', props.imgClass)"
            :src="src"
          >
        </motion.div>
        <!-- Show a placeholder while loading -->
        <Motion
          v-else
          :animate="{ opacity: [100, 0] }"
          :transition="{
            duration: 0.3,
            ease: 'easeOut',
          }"
          as-child
        >
          <Skeleton :class="cn('size-full', props.class)" alt="placeholder" />
        </Motion>
      </AnimatePresence>
    </NuxtImg>
  </LayoutGroup>
</template>

<style scoped></style>

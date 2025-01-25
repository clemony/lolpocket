<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    url: string
    alt: string
    class?: HTMLAttributes['class']
  }>(),
  {
    alt: 'image',
  },
)

const emit = defineEmits(['update:loaded'])

const isImageLoaded = ref<boolean>(false)

function imageLoaded() {
  setTimeout(() => {
    isImageLoaded.value = true
  }, 500)
  emit('update:loaded', true)
}

// @error="setBlankImg($event)"
function setBlankImg(event) {
  event.target.src = '/img/blank.webp'
}
</script>

<template>
  <div :class="cn('overflow-hidden', props.class)">
    <Skeleton
      v-show="!isImageLoaded"
      :class="cn('border-none!', props.class)"
    />

    <div
      v-show="isImageLoaded"
      class="size-full overflow-hidden"
    >
      <img
        :src="props.url"
        :alt="props.alt"
        :class="cn('animate-in fade-in-0 size-full duration-1400', props.class)"
        @load="imageLoaded()"
      />
    </div>

    <div
      v-if="isImageLoaded"
      class="img-loaded hidden"
    ></div>

    <slot />
  </div>
</template>

<style scoped></style>

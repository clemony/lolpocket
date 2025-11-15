<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const {
  alt,
  class: className,
  img,
} = defineProps<{
  alt: string
  img: string | null
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['loaded'])

/* skeleton size-full bg-blend-screen rounded-lg bg-b3 border-b3 inset-shadow-5 inset-shadow-xs border !opacity-40 */

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}
</script>

<template>
  <label
    :class="
      cn('relative size-full shrink-0 rounded-lg bg-b2 transform-3d', className)
    ">
    <img
      :key="img"
      decoding="async"
      loading="lazy"
      :src="img"
      placeholder-class=""
      v-bind="$attrs"
      :alt="alt"
      :class="
        cn(
          `
            size-full shrink-0 translate-z-0 overflow-hidden rounded-lg
            object-center
          `,
          {
            'opacity-100 ': loaded,
            'opacity-0': !loaded,
          },
        )
      "
      @load="onLoad()" />
    <slot />
  </label>
</template>

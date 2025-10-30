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
  <label :class="cn('size-full bg-b2 rounded-lg relative shrink-0 transform-3d', className)">
    <img
      :key="img"
      decoding="async"
      loading="lazy"
      :src="img"
      placeholder-class=""
      v-bind="$attrs"
      :alt="alt"
      :class="
        cn('size-full translate-z-0  overflow-hidden  shrink-0 object-center  rounded-lg  ', {
          'opacity-100 ': loaded, 'opacity-0': !loaded,
        })
      "
      @load="onLoad()" />
    <slot />
  </label>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const {
  alt,
  img,
  class: className,
} = defineProps<{
  alt: string
  img: string | null
  class?: HTMLAttributes['class']
  loadedClass?: HTMLAttributes['class']
}>()

const emit = defineEmits(['load'])
const loaded = ref(false)
function load() {
  loaded.value = true
  emit('load')
}
</script>

<template>
  <NuxtImg
    :key="img"
    loading="lazy"
    :src="img"
    placeholder-class="loading"
    v-bind="$attrs"
    :alt="alt"
    preload
    :class="
      cn(
        'size-full relative !shrink-0',
        {
          '': loaded,
          '': !loaded,
          'loadedClass': loaded,
        },
        className,
      )
    "
    @load="load()">
    <slot />
  </NuxtImg>
</template>

<style scoped></style>

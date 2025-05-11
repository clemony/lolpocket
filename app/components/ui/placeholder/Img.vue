<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { alt, img, class: className } = defineProps<{
  alt: string
  img: string
  class?: HTMLAttributes['class']
  loadedClass?: HTMLAttributes['class']
}>()

const emit = defineEmits(['loaded'])
const loaded = ref(false)
function load() {
  loaded.value = true
  emit('loaded')
}
</script>

<template>
  <NuxtImg
    loading="lazy"
    :src="img"
    placeholder-class="loading"
    v-bind="$attrs"
    :alt="alt"
    preload
    :class="cn('size-full transition-opacity duration-500 ease',
               {
                 'opacity-100': loaded,
                 'opacity-0 ': !loaded,
                 'loadedClass': loaded,
               },
               className)"
    @load="load()">
    <slot />
  </NuxtImg>
</template>

<style scoped>
</style>
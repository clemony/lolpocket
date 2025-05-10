<script lang="ts" setup>
const { alt, img, class: className } = defineProps<{
alt: string
img: string
  class?: HTMLAttributes['class']
  loadedClass?: HTMLAttributes['class']
}>()

const loaded = ref(false)
const emit = defineEmits(['loaded'])

function load(){
  loaded.value = true
  emit('loaded')
}

defineOptions({
  inheritAttrs: false
})

</script>

<template>
<NuxtImg
loading="lazy"
:src="img"
placeholder-class="loading"
v-bind="$attrs"
:alt="alt"
preload
@load="load()"
 :class="cn('size-full transition-opacity duration-500 ease',
 {
      'opacity-100': loaded,
      'opacity-0 ': !loaded,
      loadedClass: loaded
 },
className)"
/>
</template>

<style scoped>
</style>
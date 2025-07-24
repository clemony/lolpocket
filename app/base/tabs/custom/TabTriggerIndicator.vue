<script lang="ts" setup>
const props = defineProps<{
  store: any
  class?: HTMLAttributes['class']
  returnValue: any
  currentValue: any
}>()
const parentEl = useParentElement()

const isOutside = ref(false)
const store = computed (() => {
  return props.store
})

const currentValue = computedAsync(() => {
  return {
    width: props.currentValue.width,
    pos: props.currentValue.pos,
  }
})

const returnValue = computedAsync(() => {
  return {
    width: props.returnValue.width,
    pos: props.returnValue.pos,
  }
})

const width = computedAsync(() => {
  return isOutside.value ? `${returnValue.value.width}px` : `${currentValue.value.width}px`
})

const transform = computed(() => {
  return isOutside.value ? `translateX(${currentValue.value.pos}px)` : `translateX(${returnValue.value.pos}px)`
})

onMounted(() => {
  parentEl.value?.addEventListener('mouseleave', () => {
    isOutside.value = true
  })
  parentEl.value?.addEventListener('mouseenter', () => {
    isOutside.value = false
  })
})
</script>

<template>
  <Motion
    class="absolute bottom-1 left-0 border   btn   px-4 py-1 z-0 rounded-lg w-fit  ease-in font-medium border-b3 ring-1 tldr-30 ring-b3/40  bg-b1  text-bc"
    :class="cn('', { 'tldr-30': isOutside, '': !isOutside, 'opacity-0': store.returnValue.width == 0 }, props.class)"
    :style="{
      width,
      transform,
    }"></Motion>
</template>
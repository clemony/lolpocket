<script lang="ts" setup>
const props = defineProps<{
  store: any
  class?: HTMLAttributes['class']
}>()
const parentEl = useParentElement()

const isOutside = ref(false)
const store = computed (() => {
  return props.store
})

const indicatorWidth = computed(() => store.value.currentValue.width)
const returnWidth = computed(() => store.value.returnValue.width)

const width = computed(() => {
  return isOutside.value ? `${returnWidth.value}px` : `${indicatorWidth.value}px`
})

const transform = computed(() => {
  return isOutside.value ? `translateX(${store.value.returnValue.pos}px)` : `translateX(${store.value.currentValue.pos}px)`
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
    class="absolute bottom-1 left-0 border drop-shadow-xxs  btn   px-4 py-1 z-0 rounded-field w-fit  ease-in font-medium border-b3 ring-1 tldr-30 ring-b3/30 shadow-xs bg-b1 drop-shadow-xs text-bc" :class="cn('', { 'tldr-30': isOutside, '': !isOutside, 'opacity-0': store.returnValue.width == 0 }, props.class)"
    :style="{
      width,
      transform,
    }" />
</template>
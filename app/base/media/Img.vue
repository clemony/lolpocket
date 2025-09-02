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
}>()

const loaded = ref(false)
</script>

<template>
  <div class="size-full relative shrink-0">
    <NuxtImg
      :key="img"
      loading="lazy"
      :src="img"
      placeholder-class="loading"
      v-bind="$attrs"
      :alt="alt"
      preload
      :class="cn('inset-0 absolute shrink-0', className)"
      @load="loaded = true">
    </NuxtImg>
    <Skeleton
      v-if="!loaded"
      class="inset-0 bottom-0 absolute object-cover shrink-0" />
  </div>
</template>

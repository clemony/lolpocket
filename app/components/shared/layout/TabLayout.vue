<script lang="ts" setup>
const { title, description, class: className } = defineProps<{
  title?: string
  description?: string
  class?: HTMLAttributes['class']
}>()
/* ? alsdjlsajd */
const route = useRoute()
</script>

<template>
  <div class="overflow-hidden  size-full absolute inset-0 top-0">
    <div class="w-full grid grid-cols-2 z-0  max-h-44 h-44 sticky top-0 bg-b1 z-1 ">
      <slot name="background" />
      <div
        class="flex flex-col size-full gap-6 pt-12 ">
        <div class="flex items-center gap-6  pl-32">
          <slot name="icon" />
          <slot name="header" />
        </div>
        <div class="flex gap-4">
          <slot name="tabs" />
          <slot name="after-tabs" />
        </div>
      </div>
      <div class="size-full overflow-hidden  border-b border-b-b3">
        <slot name="header-right" />
      </div>
    </div>
    <slot />
  </div>
</template>
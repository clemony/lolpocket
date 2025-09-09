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
  <div class="overflow-hidden flex flex-col size-full absolute inset-0 top-0">
    <div class="w-full grid grid-cols-2 z-0 pt-26   max-h-58 h-58 sticky top-0 bg-b1 z-1 ">
      <slot name="background" />
      <Separator class="absolute z-0 bottom-0" />
      <div
        class="flex flex-col size-full gap-6">
        <div class="flex items-center gap-6  pl-32">
          <slot name="icon" />
          <slot name="header" />
        </div>
        <div class="flex gap-4 *:first:justify-self-end pl-32">
          <slot name="before-tabs" />
          <slot name="tabs" />
          <slot name="after-tabs" />
        </div>
      </div>
      <div class="size-full overflow-hidden  border-b border-b-b3">
        <slot name="header-right" />
      </div>
    </div>
    <div class="size-full overflow-hidden relative">
      <slot />
    </div>
  </div>
</template>
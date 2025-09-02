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
  <div class="overflow-hidden absolute inset-0 top-0">
    <div class="w-full h-fit sticky top-0 bg-b1 z-1 ">
      <slot name="background" />
      <div class="flex flex-col z-0 pt-26 gap-6">
        <div class="pl-44">
          <slot name="header" />
        </div>
        <slot name="tabs" />
      </div>
      <div class="absolute left-8 bottom-3 z-1 size-32 grid place-items-center ">
        <slot name="icon" />
      </div>
    </div>
    <slot />
  </div>
</template>
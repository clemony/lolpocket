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
  <div class="space-y-6 px-22  pb-16 overflow-y-auto absolute inset-0 top-0">
    <div class="w-full h-fit space-y-0.5 sticky  top-0 bg-b1 z-1 pt-12">
      <h1 class="text-9 font-bold dst">
        {{ title || route.meta?.title || route.name }}
      </h1>
      <div class="flex justify-between">
        <p class="text-bc/60 leading-8">
          {{ description || route.meta?.description }}
        </p>
        <div class="relative size-px grid self-end">
          <div class="absolute w-max h-max justify-self-end self-end bottom-2">
            <slot name="right" />
          </div>
        </div>
      </div>
      <Separator class="mt-6 mb-12" />
    </div>
    <slot />
  </div>
</template>
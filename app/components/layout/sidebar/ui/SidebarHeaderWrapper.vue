<script setup lang="ts">
const { class: className, title } = defineProps<{
  class?: HTMLAttributes['class']
  title?: string

}>()
</script>

<template>
  <div>
    <div
      :class="cn('gap-0 h-16 flex items-center px-3 w-full', className)">
      <slot name="header">
        <h2 class="dst font-bold pt-1">
          {{ title }}
        </h2>
      </slot>
    </div>
    <slot name="subheader" />
    <Separator class="-mt-px" />
  </div>
</template>
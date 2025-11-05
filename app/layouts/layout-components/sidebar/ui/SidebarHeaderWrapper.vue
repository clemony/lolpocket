<script setup lang="ts">
const { title, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  title?: string
}>()
</script>

<template>
  <div>
    <div :class="cn('gap-0 h-[45px] flex items-center px-3 w-full', className)">
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

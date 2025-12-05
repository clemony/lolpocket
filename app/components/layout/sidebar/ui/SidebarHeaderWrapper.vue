<script setup lang="ts">
const { title, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  title?: string
}>()
</script>

<template>
  <div>
    <div :class="cn('flex h-[45px] w-full items-center gap-0 px-3', className)">
      <slot name="header">
        <h2 class="pt-1 font-bold dst">
          {{ title }}
        </h2>
      </slot>
    </div>
    <slot name="subheader" />
    <Separator class="-mt-px" />
  </div>
</template>

<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <UTooltip
    arrow
    :ui="{
      arrow: 'scale-x-180 scale-y-140  ',
      content: cn('h-max max-h-74 w-98 max-w-98 noise p-0', className),
    }">
    <slot />
    <template #content>
      <slot name="content" />
    </template>
  </UTooltip>
</template>

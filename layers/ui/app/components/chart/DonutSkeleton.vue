<script lang="ts" setup>
const {
  class: className,
} = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Icon
    name="lucide:circle"
    :class="cn('size-full text-p3', className)" />
</template>

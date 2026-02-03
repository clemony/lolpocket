<script lang="ts" setup>
const {
  class: className,
} = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Icon name="lucide:circle" :class="cn('text-b3 size-full ', className)" />
</template>

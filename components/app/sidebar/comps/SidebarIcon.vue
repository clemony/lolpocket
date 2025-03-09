<script lang="ts" setup>
const props = defineProps<{
  name: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span class="size-4 relative !overflow-visible">

    <icon :name="props.name" class="absolute shrink-0" :class="cn('size-4 dst', props.class)" />
  </span>
</template>
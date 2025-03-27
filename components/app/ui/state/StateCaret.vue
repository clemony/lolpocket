<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
    <icon name="up-sm" class="" :class="cn('group-data-[state=open]/state:-rotate-180 size-4.5 tldr-30', props.class)"/>
</template>
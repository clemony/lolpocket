<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <icon
    name="left"
    :class="cn('!opacity-60 group-data-[state=open]/collapse:-rotate-90 transition-rotate duration-200', className)" />
</template>
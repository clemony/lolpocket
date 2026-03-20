<script lang="ts" setup>
const props = defineProps<{
  label: Record<string, string>
}>()
</script>

<template>
  <UUser
    size="xl"
    :ui="{
      root: 'w-full'
    }"
    v-bind="props" />
</template>

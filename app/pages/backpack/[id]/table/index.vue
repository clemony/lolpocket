<script lang="ts" setup>
defineProps<{
  folder: Folder
  view: string
}>()
</script>

<template>
  <BackpackTable :folder />
</template>

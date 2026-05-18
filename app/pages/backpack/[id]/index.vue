<script lang="ts" setup>
defineProps<{
  folder: Folder
  view: string
}>()
</script>

<template>
  <BackpackGrid :folder />
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
}>()
</script>

<template>
<div>
<SearchBox class='' />
</div>

  <VisuallyHidden>
<DialogClose/>
  </VisuallyHidden>
</template>

<style scoped></style>

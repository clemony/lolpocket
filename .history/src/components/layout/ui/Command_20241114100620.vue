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


<DialogClose as-child>
      <VisuallyHidden />
</DialogClose>
</template>

<style scoped></style>

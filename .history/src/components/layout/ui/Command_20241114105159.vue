<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue'
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
        

<DialogClose />
      </VisuallyHidden>
</template>

<style scoped></style>

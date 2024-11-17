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




        
<DialogClose class='invisible absolute pointer-events-none top-0 left-0'/>

</template>

<style scoped></style>

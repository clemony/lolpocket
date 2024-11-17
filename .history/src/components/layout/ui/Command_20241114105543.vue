<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue'
import {
  DialogClose
} from 'radix-vue'
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
<DialogClose class='invisible absolute pointer-events-none top-0 left-0'>
    <span> '</span>
</DialogClose>
       </VisuallyHidden>

</template>

<style scoped></style>

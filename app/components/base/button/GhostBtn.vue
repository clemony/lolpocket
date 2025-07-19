<script lang="ts" setup>
const {class: className } = defineProps<{
class?: HTMLAttributes['class']

}>()
</script>

<template>
 <button :class="cn(' btn  btn-sm btn-ghost btn-square rounded-lg', className)">

 </button>

</template>
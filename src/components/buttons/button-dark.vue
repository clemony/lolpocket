<script setup lang="ts">
const props = defineProps<{
    join?: boolean
}>()
</script>

<template><button :class="{ 'join-item': props.join }" class="btn btn-neutral btn-sm relative hover:opacity-80">
    <icon icon="teenyicons:folder-plus-outline" class="mr-0.5 size-4.5 pr-0.5" />
    <span class="font-medium"> New Pocket </span>
</button></template>

<style scoped></style>
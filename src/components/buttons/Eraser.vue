<script setup lang="ts">
const props = defineProps<{
    model: any
}>()

const model = props.model
</script>

<template><Button variant="ghost" size="xs" v-close-popper @click="model = ''">
    <icon icon="ph:eraser" />
</Button></template>

<style scoped></style>
<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
    <div></div>
</template>

<style scoped></style>

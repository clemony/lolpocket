<script setup lang="ts">
import { hexoid } from 'hexoid'
const toID = hexoid()
const props = defineProps<{
    basis?: number
}>()

const basis = 'basis-' + props.basis
//
</script>

<template>
<Skeleton :class="basis" :key="toID()" />
</template>

<style scoped></style>
<script setup lang="ts">
import { generateRandomString } from '@utils/keygen'
import type { pocket } from 'types'

const props = defineProps<{
    model: any
}>()

const model = ref(props.model)
const emit = defineEmits(['update:model'])
</script>

<template #first><context-menu-item @click.stop="model = '　'; emit('update:model')" class="-ml-0.5">
    <icon icon="ph:eraser" class="size-4" />

    <span class=""> Clear Note</span>
</context-menu-item>
<context-menu-separator /></template>

<style scoped></style>
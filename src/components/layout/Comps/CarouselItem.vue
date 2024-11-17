<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import type { pocket } from 'types';


const props = defineProps<{
    pocket?: pocket
    pocketKey?: string
    col2Class?: HTMLAttributes['class']
    component?: any
    cRef?: string
    id?: string

}>()
</script>

<template><a class="carousel-item size-full max-h-inherit relative flex flex-col">
    <LayoutSpacer />

    <slot />
</a></template>

<style scoped></style>
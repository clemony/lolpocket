<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>
<template>
    <div
        :class="
            cn(
                'aspect-square size-12 shrink-0 rounded-lg border border-base-300/50 shadow-inner backdrop-opacity-80',
                props.class
            )
        " />
</template>
<style scoped></style>

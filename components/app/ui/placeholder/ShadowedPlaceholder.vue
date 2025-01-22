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
                'aspect-square size-12 shrink-0 rounded-lg border border-b3/50 bg-b2/15 shadow-inner',
                props.class
            )
        " />
</template>
<style scoped></style>

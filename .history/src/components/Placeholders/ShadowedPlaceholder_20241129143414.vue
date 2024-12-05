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
                'aspect-square size-12 shrink-0 -rotate-90 rounded-lg border border-base-300/40 bg-gradient-to-bl from-base-100/70 from-[30%] to-base-200/40 p-0 opacity-90 shadow-inset',
                props.class
            )
        " />
</template>
<style scoped></style>

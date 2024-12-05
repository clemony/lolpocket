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
                'aspect-square size-12 shrink-0 -rotate-90 rounded-lg border border-base-300/40 bg-opacity-80 bg-gradient-to-tr from-base-100/70 from-[30%] to-base-200/40 p-0 shadow-inset ring-1 ring-base-300/50',
                props.class
            )
        " />
</template>
<style scoped></style>

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
                'aspect-square size-12 shrink-0 rounded-lg border border-base-300/50 bg-gradient-to-tr from-base-100/70 from-[30%] to-base-200/30 p-0 shadow-[inset_1px_1px_3px_3px_#00000008] backdrop-opacity-80',
                props.class
            )
        " />
</template>
<style scoped></style>

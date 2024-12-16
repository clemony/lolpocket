<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <button
        :class="
            cn(
                'no-drag search-drop ghosty drag-label group/qs border-box after:text-4 hover:after:text-bccent relative z-0 flex cursor-pointer! rounded-lg p-0! before:absolute before:-mb-px before:-ml-px before:size-full before:scale-105 before:bg-[url(\'/img/ui/frame.webp\')] before:bg-contain before:opacity-0 before:transition-all before:duration-200 after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50 after:content-[\'+\'] hover:before:scale-95 hover:before:opacity-40 hover:after:opacity-70 data-[state=open]:before:scale-95 data-[state=open]:before:opacity-40 data-[state=open]:after:opacity-70',
                props.class
            )
        "
        class="relative">
        <div
            class="frame z-20 h-full w-full scale-105 cursor-pointer bg-contain bg-center bg-no-repeat opacity-0 brightness-0 select-none group-hover/qs:scale-95 group-hover/qs:opacity-40">
            <slot />
        </div>
    </button>
</template>

<style scoped></style>

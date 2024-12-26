<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = defineProps<{
    class?: HTMLAttributes['class']
    noFade?: boolean
}>()
</script>

<template>
    <header
        class="bg-b1/60 mask mask-x-3 pointer-events-none absolute z-20 mt-[35px] grid h-22 w-full shrink-0 grid-cols-[1fr_4fr_2fr] items-center pt-3.5 pr-8 pl-6 backdrop-blur-md">
        <div class="pointer-events-auto flex items-center px-8">
            <slot />
        </div>
    </header>
</template>

<style scoped></style>

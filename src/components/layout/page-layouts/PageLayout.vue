<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = defineProps<{
    nav?
    class?: HTMLAttributes['class']
    noFade?: boolean
}>()
</script>

<template>
    <header
        class="5 bg-b1/60 mask mask-x-3 pointer-events-none absolute right-6 z-20 mt-[35px] grid h-22 w-full shrink-0 scale-x-105 grid-cols-[1fr_4fr_2fr] items-center pt-3.5 pr-12 pl-12 backdrop-blur-md backdrop-brightness-[95%]">
        <hgroup
            class="pointer-events-auto flex w-40 max-w-40 min-w-40 items-center px-8">
            <h1
                class="text-bc self-end pt-3 pl-0.5 font-semibold tracking-tighter text-nowrap first:capitalize">
                <slot name="header" />
            </h1>
        </hgroup>
        <div class="pointer-events-auto grid self-end">
            <nav class="flex h-full w-full items-end gap-10 pl-2">
                <slot name="header-center" />
            </nav>
            <div class="relative mb-0.5 flex h-3 w-full overflow-hidden">
                <slot name="indicator" />
            </div>
        </div>
        <menu
            class="pointer-events-auto relative mr-2 flex h-full w-full items-center justify-end gap-8">
            <slot name="header-end" />
        </menu>
    </header>

    <div class="size-full">
        <slot />
    </div>
</template>

<style scoped></style>

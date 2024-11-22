<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    class?: HTMLAttributes['class']
    open?: boolean
}>()

const open = ref(props.open)
</script>

<template>
    <button
        :class="
            cn(
                'no-drag search-drop ghosty drag-label group/qs border-box after:content-[ relative z-0 flex size-16 !cursor-pointer rounded-lg !p-0 after:absolute after:grid after:h-full after:w-full after:place-content-center after:text-lg after:opacity-50 after:content-[\'+\'] hover:after:text-neutral hover:after:opacity-80 data-[state=open]:!border-neutral/40 data-[state=open]:after:!opacity-80 data-[state=open]:[&_.frame]:scale-95 data-[state=open]:[&_.frame]:opacity-40',
                props.class
            )
        "
        class="before:absolute before:bg-[url('/img/ui/frame.webp')]">
        <div
            class="frame z-20 h-full w-full scale-105 cursor-pointer select-none bg-contain bg-center bg-no-repeat opacity-0 brightness-0 transition-all duration-200 group-hover/qs:scale-95 group-hover/qs:opacity-40">
            <slot />
        </div>
    </button>
</template>

<style scoped></style>

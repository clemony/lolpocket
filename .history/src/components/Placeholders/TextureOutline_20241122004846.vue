<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    img?: string
    type?: string
    class?: HTMLAttributes['class']
}>()

const image = computed(() => {
    let img =
        props.type == 'rune' ? 'url(/img/ui/green-dust-and-scratches.png)'
        : props.img ? props.img
        : ''
})
</script>
<template>
    <div
        :class="
            cn(
                /* b4 */ 'backdrop-blur-sm',
                /* border */
                'border border-b-base-300 border-l-base-300/60 border-r-base-300 border-t-base-300/60',
                /* shadow */
                'shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008]',

                /*  struct */
                'grid size-14 shrink-0 place-items-center overflow-hidden rounded-full p-3.5 transition-all duration-300 has-[:checked]:scale-105',
                props.class
            )
        "
        :style="{
                        backgroundImage: image, 'linear-gradient(135deg,oklch(var(--b1) / 0.4) 50%, oklch(var(--b2)) 100%)'
                    }"></div>
</template>
<style scoped></style>

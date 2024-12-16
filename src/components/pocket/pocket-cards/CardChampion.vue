<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    isHovered: any
    pocket: pocket
    layer1: any
    layer2: any
    layer3: any
}>()
const pocket = ref(props.pocket)

const champ = computed(() => {
    const a = pocket.value.champions[0].champions[0]
    const b = !a ? null : a.name
    return b
})
console.log('wtf', champ.value)
const styleRevert = computed(() => ({
    transition: '.3s ease-out all',
}))
</script>
<template>
    <div class="shape relative flex w-full justify-center drop-shadow-lg">
        <div
            class="bg-b2/60 relative z-0 size-full h-48 overflow-hidden rounded-[8px]">
            <slot />
            <div
                class="relative grid size-full place-items-center content-center items-center">
                <img
                    id="champion"
                    v-if="champ"
                    :src="`/img/champions/splash/${clean(champ)}_0.webp`"
                    class="absolute top-[55%] left-[0%] z-0 scale-300 object-center"
                    :style="isHovered ? props.layer1 : styleRevert" />

                <img
                    v-if="champ"
                    src="/img/overlay/dust.webp"
                    class="absolute top-[30%] z-0 scale-[200%] object-center opacity-50"
                    :style="props.layer2" />
                <img
                    v-if="champ"
                    src="/img/overlay/dust.webp"
                    class="absolute top-[20%] -left-[40%] z-0 scale-[200%] rotate-90! object-center opacity-60"
                    :style="props.layer3" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.shape {
    --r: 8px; /* the radius */
    --s: 43px; /* the size of the cut */

    --_m: /calc(2 * var(--r)) calc(2 * var(--r))
        radial-gradient(#000 70%, #0000 72%) no-repeat;
    mask:
        calc(var(--s) + var(--r)) 0 var(--_m),
        0 calc(var(--s) + var(--r)) var(--_m),
        radial-gradient(var(--s) at 0 0, #0000 99%, #000 101%) var(--r) var(--r)
            no-repeat,
        conic-gradient(
            at calc(var(--s) + 2 * var(--r)) calc(var(--s) + 2 * var(--r)),
            #000 75%,
            #0000 0
        );
}
</style>

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
        <!--        <div
            class="absolute bottom-2 left-3 z-20 flex h-8 items-center rounded-lg border-none bg-b1/50 !py-0.5 backdrop-blur-sm">
            <h3
                class="absolute scale-x-110 px-1 !font-serif !font-extrabold italic leading-none text-black blur-[5px] drop-shadow-sm">
                {{ pocket.champions[0].starred }}
            </h3>
            <h4
                class="absolute scale-x-110 px-1 !font-serif !font-[400] leading-none !tracking-[0.25px] text-white/95 drop-shadow-[0px_0px_6px_black]">
                {{ pocket.champions[0].starred }}
            </h4>
        </div> -->

        <div
            class="relative z-0 size-full h-48 overflow-hidden rounded-[8px] bg-b2/60">
            <slot />
            <div
                class="relative grid size-full place-items-center content-center items-center overflow-hidden">
                <img
                    id="champion"
                    v-if="champ"
                    :src="`/img/champions/splash/${clean(champ)}_0.webp`"
                    class="absolute left-[0%] top-[50%] z-0 scale-[250%] object-center"
                    :style="isHovered ? props.layer1 : styleRevert" />

                <img
                    v-if="champ"
                    src="/img/overlay/dust.webp"
                    class="absolute top-[30%] z-0 scale-[200%] object-center opacity-50"
                    :style="props.layer2" />
                <img
                    v-if="champ"
                    src="/img/overlay/dust.webp"
                    class="absolute -left-[40%] top-[20%] z-0 !rotate-90 scale-[200%] object-center opacity-60"
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

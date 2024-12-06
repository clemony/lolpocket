<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { runeColors } from '@utils/GetColor'
import { CSSProperties } from 'vue'

import { useGeneralStore } from '@stores/generalStore'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const gs = useGeneralStore()

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
console.log(set)

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))
const isHovered = useElementHover(wrapper)

// Define roll and tilt as modifiable refs
const roll = ref(0)
const tilt = ref(0)
onMounted(() => {
    roll.value = 0 // Set initial roll
    console.log('mount', roll.value)
    tilt.value = 0 // Set initial tilt
    console.log('mout', tilt.value)
})
const wrapperStyle: CSSProperties = {
    minHeight: '200px',
    transition: '.3s ease-out all',
}

const containerStyle: CSSProperties = {
    //margin: '3em auto',
    perspective: '350px',
}

const cardStyle = computed(() => ({
    transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
    }deg)`,
}))

const layer0 = computed(() => ({
    transform: `translateX(${parallax.tilt * 2}px) translateY(${
        parallax.roll * 2
    }px) `,
}))

const layer1 = computed(() => ({
    perspective: '45px',
    /*     background: `url('${champImage.value}')`, */
    transform:
        isHovered ?
            `translateX(${parallax.tilt * 8}px) translateY(${
                parallax.roll * 8
            }px) scale(2.5)`
        :   null,
}))

const layer2 = computed(() => ({
    perspective: '250px',
    //perspective: '300px',
    transform:
        isHovered ?
            `translateX(${parallax.tilt * 4}px) translateY(${
                parallax.roll * 4
            }px) scale(1.95)`
        :   null,
}))

const layer3 = computed(() => ({
    perspective: '150px',
    //perspective: '300px',
    transform:
        isHovered ?
            `translateX(${parallax.tilt * 6}px) translateY(${
                parallax.roll * 6
            }px) scale(1.95)`
        :   null,
}))
</script>

<template>
    <div :style="wrapperStyle" ref="wrapper" class="rounded-xl">
        <div :style="containerStyle" class="size-fit rounded-xl">
            <div
                :style="isHovered ? cardStyle : null"
                class="size-fit rounded-xl transition-all duration-300 ease-out">
                <label
                    class="swap swap-flip relative size-fit rounded-xl shadow-smooth">
                    <input type="checkbox" class="hidden" />

                    <Card
                        class="swap-off relative grid h-[290px] w-[230px] justify-center overflow-hidden rounded-xl border-4 border-neutral-100 bg-gradient-to-br from-transparent to-sorcery px-2 ring-1 ring-neutral/20 before:absolute before:size-full before:rounded-xl before:bg-[url('/img/overlay/cardboard.png')]"
                        :style="{
                            background: `linear-gradient(to right bottom, transparent, var(--${set.primary}-light), var(--${set.primary}))`,
                        }">
                        <CardContent
                            class="relative size-full w-inherit items-center rounded-xl bg-gradient-to-br from-neutral-50/60 via-neutral-50/50 to-neutral-50/40 p-5">
                            <CardChampion
                                :pocket="pocket"
                                :wrapper="wrapper"
                                :isHovered="isHovered"
                                :layer1="layer1"
                                :layer2="layer2"
                                :layer3="layer3">
                                <menu
                                    class="absolute bottom-2 right-2 z-10 flex items-center gap-3">
                                    <CardSpells :pocket="pocket" />
                                    <CardShards :pocket="pocket" />
                                </menu>
                            </CardChampion>
                            <CardKeystone :set="set" :style="layer0" />

                            <div class="flex w-full flex-col gap-5 py-6">
                                <CardRuneset
                                    :pocket="pocket"
                                    :style="layer0"
                                    :set="set"></CardRuneset>

                                <CardItems :pocket="pocket" :set="set" />
                            </div>
                        </CardContent>
                    </Card>
                    <div
                        :style="{ backgroundImage: `url(${gs.cardBack})` }"
                        class="swap-on flex h-[290px] w-[230px] items-center justify-center !bg-transparent bg-center [background-size:230px_290px]">
                        <CardBack :pocket="pocket" :style="layer0" />
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped>
.swap-flip {
    transform-style: none !important;
    perspective: none !important;
}
</style>

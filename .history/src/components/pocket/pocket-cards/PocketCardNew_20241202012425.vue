<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { runeColors } from '@lib/functions/GetColor'
import { CSSProperties } from 'vue'

import { useGeneralStore } from '@stores/generalStore'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const champImage = computed(() => {
    return `url(\'/img/champions/splash/${clean(pocket.value.champions[0].starred)}_0.webp\')`
})

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
    backgroundImage: champImage.value,
    perspective: '45px',
    //perspective: '300px',
    transform: `translateX(${parallax.tilt * 8}px) translateY(${
        parallax.roll * 8
    }px) scale(1.1)`,
}))
</script>

<template>
    <div :style="wrapperStyle" ref="wrapper" class="">
        <div :style="containerStyle">
            <div
                :style="isHovered ? cardStyle : null"
                class="transition-all duration-300 ease-out">
                <label
                    class="swap swap-flip relative size-fit rounded-lg shadow-smooth backdrop-blur-md">
                    <input type="checkbox" class="hidden" />

                    <Card
                        class="swap-off relative grid h-[290px] w-[240px] justify-center overflow-hidden rounded-xl border border-neutral/20 !bg-transparent bg-right-bottom px-2 before:absolute"
                        :style="{
                            backgroundImage: champImage,
                        }">
                        <CardContent
                            class="relative size-full w-inherit items-center overflow-hidden rounded-xl bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
                            <div class="flex w-full items-center pl-16">
                                <!--    <div
                                    :class="
                                        cn('flex w-full items-center gap-2')
                                    ">
                                    <ShardSet :pocket="pocket" />
                                </div> -->
                                <Grow />
                                <h4 class="px-5 pt-2 text-right font-serif">
                                    {{ pocket.champions[0].starred }}
                                </h4>
                            </div>

                            <div
                                class="relative flex w-full justify-center !overflow-hidden">
                                <div
                                    class="masking"
                                    :class="
                                        cn(
                                            'z-0 h-56 w-[94%] !overflow-hidden rounded-lg',
                                            {
                                                'border border-neutral':
                                                    pocket.champions[0].starred,
                                            }
                                        )
                                    ">
                                    <div
                                        class="absolute -left-0 -top-7 isolate size-16 overflow-hidden rounded-full border border-neutral shadow-[2px_2px_0px_0px_#00000024]" />
                                    <div
                                        class="size-full bg-[50%_5%] bg-no-repeat [background-size:200%]"
                                        :style="layer1" />
                                </div>
                            </div>
                            <CardRuneset
                                :pocket="pocket"
                                :style="layer0"
                                :set="set"
                                type="runes1"
                                class="left-7 top-22" />
                            <CardRuneset
                                :pocket="pocket"
                                :style="layer0"
                                :set="set"
                                type="runes2"
                                class="right-6.5 top-10" />
                            <CardKeystone :set="set" :style="layer0" />

                            <div class="size-fit flex-col px-2">
                                <h5 class="font-serif !text-[1.175rem]">
                                    {{ pocket.name }}
                                </h5>
                                <div class="flex items-end">
                                    <div class="w-full justify-center">
                                        <MiniItemGrid :pocket="pocket" />
                                    </div>
                                </div>
                            </div>

                            <!--  <SpellDisplay :pocket="pocket" class="" /> -->
                        </CardContent>
                    </Card>
                    <div
                        :style="{ backgroundImage: `url(${gs.cardBack})` }"
                        class="swap-on flex h-[290px] w-[240px] items-center justify-center !bg-transparent bg-center [background-size:240px_290px]">
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

.masking {
    mask-image: radial-gradient(
        circle at 9px -4px,
        transparent 30px,
        black 31px
    );
}
</style>

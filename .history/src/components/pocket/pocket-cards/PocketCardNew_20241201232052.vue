<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { runeColors } from '@lib/functions/GetColor'
import { CSSProperties } from 'vue'
import { mask } from '@windwards/plugin-mask'

import { toggleDrawerState } from '@utils/utils'
import { editPocketDrawer } from '@/components/drawer/data'
import { useGeneralStore } from '@stores/generalStore'

import { deletePocket, duplicatePocket } from '@utils/pocketUtilities'
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
    //perspective: '300px',
    transform: `translateX(${parallax.tilt * 8}px) translateY(${
        parallax.roll * 8
    }px) scale(1.1)`,
}))

const variant = 'ghost'
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
                        class="swap-off relative grid h-[260px] w-[210px] justify-center rounded-xl border border-neutral/20 !bg-transparent bg-right-bottom px-2 before:absolute"
                        :style="{
                            backgroundImage: champImage,
                        }">
                        <CardContent
                            class="relative h-full w-inherit items-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
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
                                            'z-0 h-36 w-[90%] !overflow-hidden rounded-md',
                                            {
                                                'border border-neutral':
                                                    pocket.champions[0].starred,
                                            }
                                        )
                                    ">
                                    <div
                                        class="size-full bg-[50%_10%] bg-no-repeat [background-size:200%]"
                                        :style="layer1" />
                                </div>
                                <!-- <div
                                    class="absolute -left-0 -top-7 isolate size-16 overflow-hidden rounded-full bg-neutral/60 shadow-[2px_2px_0px_0px_#00000024]" /> -->
                            </div>
                            <CardKeystone :set="set" :style="layer0" />
                            <div
                                class="absolute right-2 top-10 z-10 h-fit flex-col items-center justify-end">
                                <div
                                    :class="
                                        cn(
                                            'z-20 mt-1 h-fit w-fit gap-2',

                                            '[&_:first-child]:z-20',

                                            '[&_:nth-child(2)]:z-10',

                                            '[&_:last-child]:z-0'
                                        )
                                    ">
                                    <RuneSet :pocket="pocket" />
                                </div>
                            </div>

                            <div class="size-fit flex-col px-4">
                                <h5 class="font-serif !text-[1.175rem]">
                                    {{ pocket.name }}
                                </h5>
                                <div class="flex w-3/4 items-end">
                                    <div
                                        class="flex flex-row flex-wrap justify-center">
                                        <MiniItemGrid :pocket="pocket" />
                                    </div>
                                </div>
                            </div>

                            <!--  <SpellDisplay :pocket="pocket" class="" /> -->
                        </CardContent>
                    </Card>
                    <div
                        :style="{ backgroundImage: `url(${gs.cardBack})` }"
                        class="swap-on flex h-[260px] w-[210px] items-center justify-center !bg-transparent bg-center [background-size:210px_260px]">
                        <div
                            class="flex gap-5 [&_>*]:grid [&_>*]:!aspect-square [&_>*]:size-11 [&_>*]:place-items-center [&_>*]:justify-start [&_>*]:rounded-full [&_>*]:bg-neutral/70 [&_>*]:text-neutral-content [&_>*]:shadow-standard [&_>*]:ring-1 [&_>*]:ring-offset-2 [&_>*]:ring-offset-base-100/20 [&_>*]:backdrop-blur-sm after:[&_>*]:absolute after:[&_>*]:size-full after:[&_>*]:scale-[120%] after:[&_>*]:rounded-full after:[&_>*]:border after:[&_>*]:border-neutral/50 hover:[&_>*]:bg-base-100/20 [&_svg]:mr-1">
                            <Tooltip
                                content="Edit Pocket Data"
                                align="bottom"
                                dark>
                                <Button
                                    @click="
                                        toggleDrawerState(
                                            editPocketDrawer,
                                            pocket
                                        )
                                    "
                                    :style="layer0">
                                    <icon icon="teenyicons:edit-1-outline" />
                                </Button>
                            </Tooltip>
                            <Tooltip content="Open Pocket" align="bottom" dark>
                                <Button
                                    class="grid place-items-center"
                                    :style="layer0"
                                    as-child>
                                    <RouterLink :to="`pocket/${pocket.key}`">
                                        <icon
                                            icon="uiw:folder-open"
                                            class="-ml-2px size-5.5 opacity-80" />
                                    </RouterLink>
                                </Button>
                            </Tooltip>

                            <Dropdown
                                no-arrow
                                size="icon"
                                :style="layer0"
                                class="!size-11"
                                dark
                                contentClass="min-w-52">
                                <template #1>
                                    <Tooltip
                                        content="More..."
                                        align="bottom"
                                        :sideOffset="15"
                                        dark>
                                        <icon
                                            icon="teenyicons:more-horizontal-outline"
                                            class="ml-px" />
                                    </Tooltip>
                                </template>
                                <div
                                    class="dir size-full pr-0 [&_>*]:w-full [&_>*]:justify-start [&_>*]:gap-4 [&_>*]:pl-3 hover:[&_>*]:bg-base-100/20">
                                    <Button
                                        @click="duplicatePocket(pocket)"
                                        :variant="variant">
                                        <icon
                                            icon="teenyicons:layers-subtract-outline" />
                                        <span class="-ml-[1px]">Duplicate</span>
                                    </Button>

                                    <Button :variant="variant">
                                        <icon
                                            icon="teenyicons:upload-outline" />
                                        <span>Export</span>
                                    </Button>

                                    <Button
                                        @click="deletePocket(pocket.key)"
                                        :variant="variant">
                                        <icon icon="teenyicons:bin-outline" />
                                        <span>Send to Trash</span>
                                    </Button>
                                </div>
                            </Dropdown>
                        </div>
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
    mask-image:
    radial-gradient(
        circle at 10px 0px,
        transparent 28px,
        black 29px
 */
}
</style>

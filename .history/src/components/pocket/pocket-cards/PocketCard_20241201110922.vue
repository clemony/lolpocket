<script setup lang="ts">
import type { pocket } from 'types'
import { clean } from '@lib/utils'
import { CSSProperties } from 'vue'
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

console.log('pra', parallax)

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
    perspective: '300px',
}

const cardStyle = computed(() => ({
    transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
    }deg)`,
}))
</script>

<template>
    <div :style="wrapperStyle" ref="wrapper">
        <div :style="containerStyle">
            <div
                :style="isHovered ? cardStyle : null"
                class="transition-all duration-300 ease-out">
                <label class="swap swap-flip relative backdrop-blur-md">
                    <input type="checkbox" />

                    <Card
                        class="swap-off relative grid h-[260px] w-[210px] justify-center overflow-hidden rounded-xl bg-transparent px-2">
                        <div
                            class="mask absolute top-0 h-[200px] w-full bg-[20%_80%] bg-no-repeat mask-b-52 [background-size:200%]"
                            :style="{
                                backgroundImage: champImage,
                            }"></div>
                        <CardContent
                            class="relative h-full w-inherit items-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
                            <CardHeader class="relative flex px-3 pb-4">
                                <CardTitle
                                    class="z-10 pb-0 !text-xl font-semibold">
                                    {{ pocket.name }}
                                </CardTitle>
                                <CardDescription class="h-7 pb-2">
                                    <h5
                                        class="z-10 pt-0 !text-base font-semibold !not-italic">
                                        <span v-if="pocket.tags.length">#</span>
                                        {{ pocket.tags[0] }}
                                    </h5>
                                </CardDescription>
                            </CardHeader>

                            <div class="grid w-full px-3">
                                <div
                                    class="flex h-fit justify-center gap-1 pb-3">
                                    <div class="relative flex items-end">
                                        <div
                                            class="flex w-full flex-row flex-wrap justify-center">
                                            <MiniItemGrid :pocket="pocket" />
                                        </div>
                                    </div>

                                    <SpellDisplay :pocket="pocket" class="" />
                                </div>

                                <div class="relative flex pb-3">
                                    <div
                                        class="z-20 flex-col items-center justify-center">
                                        <img
                                            v-if="
                                                set.keystone &&
                                                set.keystone.name != 'none'
                                            "
                                            :src="set.keystone.img"
                                            class="size-16 self-center drop-shadow-md" />
                                        <ShadowedPlaceholder
                                            v-else
                                            class="size-16 rounded-full" />

                                        <div :class="cn('flex gap-3.5 pt-3')">
                                            <ShardSet :pocket="pocket" />
                                        </div>
                                    </div>

                                    <div
                                        class="-ml-5 h-fit flex-col items-center justify-start">
                                        <div
                                            :class="
                                                cn(
                                                    'z-10 flex w-fit gap-2',

                                                    '[&_:first-child]:z-20',

                                                    '[&_:nth-child(2)]:z-10',

                                                    '[&_:last-child]:z-0'
                                                )
                                            ">
                                            <RuneSet
                                                :pocket="pocket"
                                                type="runes1" />
                                        </div>
                                        <div
                                            :class="
                                                cn('z-0 ml-14 mt-2 flex gap-2')
                                            ">
                                            <RuneSet
                                                :pocket="pocket"
                                                type="runes2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div
                        :style="{ backgroundImage: `url(${gs.cardBack})` }"
                        class="swap-on flex h-[260px] w-[210px] items-center justify-center !bg-transparent bg-center [background-size:215px_260px]">
                        <div
                            class="flex gap-2 backdrop-blur-sm [&_>*]:grid [&_>*]:!aspect-square [&_>*]:size-11 [&_>*]:place-items-center [&_>*]:justify-start [&_>*]:rounded-full [&_>*]:bg-neutral/70 [&_>*]:text-neutral-content [&_>*]:shadow-sm [&_span]:hidden [&_svg]:mr-2px">
                            <Button
                                @click="
                                    toggleDrawerState(editPocketDrawer, pocket)
                                ">
                                <icon icon="teenyicons:edit-1-outline" />
                            </Button>

                            <Button @click="duplicatePocket(pocket)">
                                <icon
                                    icon="teenyicons:layers-subtract-outline" />
                                <span class="-ml-[1px]">Duplicate</span>
                            </Button>

                            <Button>
                                <icon icon="teenyicons:upload-outline" />
                                <span>Export</span>
                            </Button>

                            <Button @click="deletePocket(pocket.key)">
                                <icon icon="teenyicons:bin-outline" />
                                <span>Send to Trash</span>
                            </Button>
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
</style>

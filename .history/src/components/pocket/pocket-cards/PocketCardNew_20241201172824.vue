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
    <div :style="wrapperStyle" ref="wrapper" class="rounded-lg shadow-smooth">
        <div :style="containerStyle">
            <div
                :style="isHovered ? cardStyle : null"
                class="transition-all duration-300 ease-out">
                <label class="swap swap-flip relative backdrop-blur-md">
                    <input type="checkbox" class="hidden" />

                    <Card
                        class="swap-off relative grid h-[260px] w-[210px] justify-center overflow-hidden rounded-xl border-base-300 bg-transparent px-2">
                        <CardContent
                            class="relative h-full w-inherit items-center bg-gradient-to-b from-base-100/40 from-0% via-base-100/70 via-15% to-base-100/80 to-30%">
                            <CardHeader class="relative flex px-3 pb-1">
                                <CardTitle
                                    class="z-10 pb-0 !text-lg !font-bold italic leading-none">
                                    {{ pocket.champions[0].starred }}
                                </CardTitle>
                                <!--   <CardDescription class="h-7 pb-2">
                                    <h5
                                        class="z-10 pt-0 !text-base font-semibold !not-italic">
                                        <span v-if="pocket.tags.length">#</span>
                                        {{ pocket.tags[0] }}
                                    </h5>
                                </CardDescription> -->
                            </CardHeader>
                            <div class="flex w-full justify-center">
                                <div
                                    class="z-0 h-36 w-[90%] overflow-hidden rounded-md">
                                    <div
                                        class="size-full bg-[50%_10%] bg-no-repeat [background-size:200%]"
                                        :style="layer1" />
                                </div>
                            </div>

                            <!--   <div
                                class="absolute right-0 top-0 z-[1] h-fit flex-col items-center justify-end">
                                <div
                                    :class="
                                        cn(
                                            'z-10 mt-1 h-fit w-fit gap-2',

                                            '[&_:first-child]:z-20',

                                            '[&_:nth-child(2)]:z-10',

                                            '[&_:last-child]:z-0'
                                        )
                                    ">
                                    <RuneSet :pocket="pocket" />
                                </div>
                            </div>-->

                            <div class="grid w-full px-3">
                                <div
                                    class="flex h-fit justify-center gap-1 pb-4">
                                    <div class="relative flex items-end">
                                        <div
                                            class="flex w-full flex-row flex-wrap justify-center">
                                            <MiniItemGrid :pocket="pocket" />
                                        </div>
                                    </div>

                                    <SpellDisplay :pocket="pocket" class="" />
                                </div>

                                <div
                                    class="z-20 flex-col items-center justify-center">
                                    <img
                                        v-if="
                                            set.keystone &&
                                            set.keystone.name != 'none'
                                        "
                                        :src="set.keystone.img"
                                        class="size-14 self-center drop-shadow-md" />
                                    <ShadowedPlaceholder
                                        v-else
                                        class="size-14 rounded-full" />

                                    <div :class="cn('flex gap-3.5 pt-3')">
                                        <ShardSet :pocket="pocket" />
                                    </div>
                                </div>

                                <div>
                                    {{ pocket.name }}
                                </div>
                            </div>
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
</style>

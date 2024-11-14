<script setup lang="ts">
import { cn } from '@lib/utils'
import {
    ScrollAreaCorner,
    ScrollAreaRoot,
    type ScrollAreaRootProps,
    ScrollAreaViewport,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<
    ScrollAreaRootProps & {
        class?: HTMLAttributes['class']
        isTop?: boolean
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const el = ref<HTMLElement | null>(null)
const smooth = ref(false)
const behavior = computed(() => (smooth.value ? 'smooth' : 'auto'))
const { x, y, isScrolling, arrivedState, directions } = useScroll(el, {
    behavior,
})
const { left, right, top, bottom } = toRefs(arrivedState)
const {
    left: toLeft,
    right: toRight,
    top: toTop,
    bottom: toBottom,
} = toRefs(directions)

const isTop = ref(top.value)

console.log(isTop.value)

watch(
    () => useScroll(el).arrivedState.top,
    (newVal) => {
        console.log(newVal)
        console.log(useScroll(el).arrivedState.top)
    }
)
</script>

<template>
    <ScrollAreaRoot
        v-bind="delegatedProps"
        ref="el"
        :class="cn('relative overflow-hidden', props.class)">
        <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
            <div class="absolute z-50 bg-white">
                <span text="right" opacity="75">isScrolling</span>
                <BooleanDisplay :value="isScrolling" />
                <div text="right" opacity="75">Top Arrived</div>
                <BooleanDisplay :value="top" />
                <div text="right" opacity="75">Right Arrived</div>
                <BooleanDisplay :value="right" />
                <div text="right" opacity="75">Bottom Arrived</div>
                <BooleanDisplay :value="bottom" />
                <div text="right" opacity="75">Left Arrived</div>
                <BooleanDisplay :value="left" />
                <div text="right" opacity="75">Scrolling Up</div>
                <BooleanDisplay :value="toTop" />
                <div text="right" opacity="75">Scrolling Right</div>
                <BooleanDisplay :value="toRight" />
                <div text="right" opacity="75">Scrolling Down</div>
                <BooleanDisplay :value="toBottom" />
                <div text="right" opacity="75">Scrolling Left</div>
                <BooleanDisplay :value="toLeft" />
            </div>
            <slot />
        </ScrollAreaViewport>
        <ScrollBar />
        <ScrollAreaCorner />
    </ScrollAreaRoot>
</template>

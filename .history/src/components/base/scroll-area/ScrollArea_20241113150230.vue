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
        :class="cn('relative overflow-hidden', props.class)">
        <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
            <slot />
        </ScrollAreaViewport>
        <ScrollBar />
        <ScrollAreaCorner />
    </ScrollAreaRoot>
</template>

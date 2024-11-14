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

const scrollArea = ref<HTMLElement | null>(null)

const { x, y, isScrolling, arrivedState, directions } = useScroll(scrollArea)
console.log(useScroll(scrollArea))

const { left, right, top, bottom } = toRefs(arrivedState)

const isTop = ref(top.value)

console.log(isTop.value)

watch(
    () => useScroll(scrollArea).arrivedState.top,
    (newVal) => {
        console.log(newVal)
        console.log(useScroll(scrollArea).arrivedState.top)
    }
)
</script>

<template>
    <ScrollAreaRoot
        v-bind="delegatedProps"
        :class="cn('relative overflow-hidden', props.class)">
        <ScrollAreaViewport
            ref="scrollArea"
            class="h-full w-full rounded-[inherit]">
            <slot />
        </ScrollAreaViewport>
        <ScrollBar />
        <ScrollAreaCorner />
    </ScrollAreaRoot>
</template>

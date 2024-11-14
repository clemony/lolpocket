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
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const el = ref<HTMLElement | null>(null)

defineExpose({
    el,
})
</script>

<template>
    <ScrollAreaRoot
        v-bind="delegatedProps"
        :class="cn('relative overflow-hidden', props.class)">
        <ScrollAreaViewport ref="el" class="h-full w-full rounded-[inherit]">
            <slot />
        </ScrollAreaViewport>
        <ScrollBar />
        <ScrollAreaCorner />
    </ScrollAreaRoot>
</template>

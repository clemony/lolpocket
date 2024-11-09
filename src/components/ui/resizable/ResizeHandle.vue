<script setup lang="ts">
import { cn } from '@/lib/utils'

import { SplitterResizeHandle, type SplitterResizeHandleEmits, type SplitterResizeHandleProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SplitterResizeHandleProps & { class?: HTMLAttributes['class'], withHandle?: boolean }>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
<SplitterResizeHandle v-bind="forwarded"
    :class="cn('relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-300 focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90 opacity-60 hover:opacity-100 transition-all duration-300', props.class)">
    <slot />
    <template v-if="props.withHandle">
        <div class="z-10 flex  items-center justify-center ">
            <icon icon='fluent-mdl2:scroll-up-down' class="size-3.5 rotate-90 opacity-80" />
        </div>
    </template>
</SplitterResizeHandle>
</template>

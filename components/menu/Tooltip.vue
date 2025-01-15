<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = withDefaults(
    defineProps<{
        content?: string
        class?: HTMLAttributes['class']
        dark?: boolean
        align?: any
        sideOffset?: number
        side?: any
        noWrap?: boolean
    }>(),
    {
        align: 'start',
        side: 'bottom',
    }
)

const contents = ref()
const width = useElementSize(contents)
</script>
<template>
    <TooltipProvider>
        <TooltipRoot :delayDuration="700">
            <TooltipTrigger as-child>
                <slot />
            </TooltipTrigger>
            <TooltipContent
                :class="
                    cn(
                        'text-medium text-2 border-b2 relative flex max-w-44 shrink rounded-lg text-wrap',
                        {
                            'border-neutral': props.dark,
                        },
                        props.class
                    )
                "
                :style="{ width: width + 'px' }"
                :side="props.side"
                :sideOffset="props.sideOffset"
                :align="props.align">
                <div
                    ref="contents"
                    class="flex shrink items-center gap-1 overflow-hidden"
                    :class="{ 'flex-nowrap': props.noWrap }">
                    {{ content }}
                    <slot name="tooltip" />
                </div>
            </TooltipContent>
        </TooltipRoot>
    </TooltipProvider>
</template>
<style scoped></style>

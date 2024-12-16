<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = withDefaults(
    defineProps<{
        content?: string
        class?: HTMLAttributes['class']
        dark?: boolean
        align?: any
        sideOffset?: number
    }>(),
    {
        align: 'start',
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
                        'text-medium text-2 shadow-pretty border-b2 flex max-w-44 shrink rounded-lg text-wrap',
                        {
                            'border-neutral bg-neutral/70 text-bc backdrop-blur-md':
                                props.dark,
                        },
                        props.class
                    )
                "
                :style="{ width: width + 'px' }"
                side="bottom"
                :sideOffset="props.sideOffset"
                :align="props.align">
                <p ref="contents" class="flex shrink">{{ content }}</p>
            </TooltipContent>
        </TooltipRoot>
    </TooltipProvider>
</template>
<style scoped></style>

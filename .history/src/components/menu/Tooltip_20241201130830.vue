<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = withDefaults(
    defineProps<{
        content?: string
        class?: HTMLAttributes['class']
        dark?: boolean
        align?: string
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
                        'text-medium flex max-w-44 flex-shrink text-wrap rounded-lg text-sm shadow-pretty',
                        {
                            'border-neutral bg-neutral/70 text-neutral-content backdrop-blur-md':
                                props.dark,
                        },
                        props.class
                    )
                "
                :style="{ width: width + 'px' }"
                side="bottom"
                :sideOffset="props.sideOffset"
                :align="props.align">
                <p ref="contents" class="flex flex-shrink">{{ content }}</p>
            </TooltipContent>
        </TooltipRoot>
    </TooltipProvider>
</template>
<style scoped></style>

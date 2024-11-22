<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    content?: string
    class?: HTMLAttributes['class']
    dark?: boolean
}>()

const contents = ref()
const width = useElementSize(contents)
</script>
<template>
    <TooltipRoot>
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
            align="start">
            <p ref="contents" class="flex flex-shrink">{{ content }}</p>
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>

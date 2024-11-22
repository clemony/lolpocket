<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    content?: string
    class?: HTMLAttributes['class']
    dark?: boolean
}>()

const content = ref()
const width = useElementSize(content)
</script>
<template>
    <TooltipRoot>
        <TooltipTrigger as-child>
            <slot />
        </TooltipTrigger>
        <TooltipContent
            :class="
                cn(
                    'text-medium text-balanced flex w-fit min-w-28 max-w-44 flex-shrink rounded-lg text-sm shadow-pretty',
                    {
                        'border-neutral bg-neutral/70 text-neutral-content backdrop-blur-md':
                            props.dark,
                    },
                    props.class
                )
            "
            :style="{ width: width + 'px' }"
            side="bottom"
            align="start"
            as-child>
            {{ content }}
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>

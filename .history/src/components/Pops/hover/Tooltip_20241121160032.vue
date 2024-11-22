<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { MaybeElementRef } from '@vueuse/core'

const props = defineProps<{
    content?: string
    class?: HTMLAttributes['class']
    dark?: boolean
    ref?: MaybeRef
}>()

const range = document.createRange()
const p = props.ref
const text = p.childNodes[0]
range.setStartBefore(text)
range.setEndAfter(text)
const clientRect = range.getBoundingClientRect()
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
            side="bottom"
            align="start">
            {{ content }}
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>

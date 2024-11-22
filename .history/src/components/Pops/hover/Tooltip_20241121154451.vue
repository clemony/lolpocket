<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    content?: string
    class?: HTMLAttributes['class']
    dark?: boolean
}>()
</script>
<template>
    <TooltipRoot>
        <TooltipTrigger as-child>
            <slot />
        </TooltipTrigger>
        <TooltipContent
            :class="
                cn(
                    'text-medium max-w-48 text-pretty rounded-lg text-sm shadow-pretty',
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

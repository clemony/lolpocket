<script setup lang="ts">
import { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes['class']
        size?: string
        variant?: string
    }>(),
    {
        size: 'sm',
        variant: 'ghost',
    }
)
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                :class="
                    cn(
                        'flex h-full w-full flex-nowrap items-center gap-4 rounded-lg !border-0 px-3 text-base !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200 data-[state=open]:shadow-sm data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40',
                        props.class
                    )
                "
                :variant="props.variant"
                :size="props.size">
                <slot name="1" />

                <slot name="2" />

                <icon
                    icon="teenyicons:caret-vertical-small-outline"
                    class="w-4 shrink-0 justify-end opacity-60" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <slot />
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>

<script setup lang="ts">
import { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<{
        pocket: pocket
        oneClass?: HTMLAttributes['class']
        twoClass?: HTMLAttributes['class']
        buttonClass?: HTMLAttributes['class']
        size?: string
    }>(),
    {
        size: 'sm',
    }
)
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                :class="
                    cn(
                        'flex h-full w-full flex-nowrap items-center gap-3 rounded-lg !border-0 pr-1 text-base !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200 data-[state=open]:shadow-sm data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40',
                        props.buttonClass
                    )
                "
                variant="ghost"
                :size="props.size">
                <div
                    class="mr-1 mt-1 flex grow flex-col items-center justify-end gap-1.5 text-right leading-tight"
                    :class="cn('', props.oneClass)">
                    <slot name="1" />
                </div>
                <div :class="cn('', props.twoClass)">
                    <slot name="2" />
                </div>

                <div
                    class="relative h-full w-4 shrink-0 items-center justify-end">
                    <icon
                        icon="teenyicons:caret-vertical-small-outline"
                        class="opacity-60" />
                </div>
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
</template>

<style scoped></style>

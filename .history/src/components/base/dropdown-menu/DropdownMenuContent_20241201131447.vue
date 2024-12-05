<script setup lang="ts">
import { cn } from '@lib/utils'
import {
    DropdownMenuContent,
    type DropdownMenuContentEmits,
    type DropdownMenuContentProps,
    DropdownMenuPortal,
    useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<
        DropdownMenuContentProps & {
            class?: HTMLAttributes['class']
            style?: any
        }
    >(),
    {
        sideOffset: 4,
    }
)
const emits = defineEmits<DropdownMenuContentEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <DropdownMenuPortal>
        <DropdownMenuContent
            v-bind="forwarded"
            :class="
                cn(
                    'text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border bg-base-100/90 p-1 shadow-md backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    props.class
                )
            "
            :style="props.style">
            <slot />
        </DropdownMenuContent>
    </DropdownMenuPortal>
</template>

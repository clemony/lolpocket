<script setup lang="ts">
import { cn } from '@lib/utils'
import {
    MenubarItem,
    type MenubarItemEmits,
    type MenubarItemProps,
    useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    MenubarItemProps & { class?: HTMLAttributes['class']; inset?: boolean }
>()

const emits = defineEmits<MenubarItemEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <MenubarItem
        v-bind="forwarded"
        :class="
            cn(
                'relative flex cursor-default select-none items-center gap-4 rounded-sm px-2 py-1.5 text-sm font-medium tracking-normal outline-none focus:bg-base-200/60 focus:text-base-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4.5 [&_svg]:opacity-90',
                inset && 'pl-8',
                props.class
            )
        ">
        <slot />
    </MenubarItem>
</template>

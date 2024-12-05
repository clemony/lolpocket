<script lang="ts" setup>
import { cn } from '@lib/utils'

import { computed, type HtmlHTMLAttributes } from 'vue'
import {
    DialogTitle as DrawerTitle,
    type DialogTitleProps as DrawerTitleProps,
} from 'radix-vue'

const props = defineProps<
    DrawerTitleProps & { class?: HtmlHTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <DrawerTitle
        v-bind="delegatedProps"
        :class="
            cn('text-lg font-semibold leading-none tracking-tight', props.class)
        ">
        <slot />
    </DrawerTitle>
</template>

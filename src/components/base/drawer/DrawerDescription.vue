<script lang="ts" setup>
import { cn } from '@lib/utils'

import {
    DialogDescription as DrawerDescription,
    type DialogDescriptionProps as DrawerDescriptionProps,
} from 'radix-vue'
import { computed, type HtmlHTMLAttributes } from 'vue'

const props = defineProps<
    DrawerDescriptionProps & { class?: HtmlHTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <DrawerDescription
        v-bind="delegatedProps"
        :class="cn('text-xs text-base-content/60', props.class)">
        <slot />
    </DrawerDescription>
</template>

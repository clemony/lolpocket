<script setup lang="ts">
import type { DropdownMenuLabelProps } from 'reka-ui'
import { DropdownMenuLabel, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwarded"
    :class="cn('px-2 py-1.5 text-2 text-bc/50 font-semibold', inset && 'pl-8', props.class)">
    <slot />
  </DropdownMenuLabel>
</template>

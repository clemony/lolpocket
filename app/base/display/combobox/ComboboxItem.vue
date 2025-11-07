<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'reka-ui'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="cn('relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-3 outline-none data-[highlighted]:bg-b2/60 data-[highlighted]:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4.5 [&_svg]:shrink-0', props.class)">
    <slot />
  </ComboboxItem>
</template>

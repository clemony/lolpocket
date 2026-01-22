<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'reka-ui'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  ComboboxItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="
      cn('relative flex cursor-default items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-md outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-b2/60 data-[highlighted]:text-bc [&_svg]:size-4.5 [&_svg]:shrink-0',
        props.class,
      )
    ">
    <slot />
  </ComboboxItem>
</template>

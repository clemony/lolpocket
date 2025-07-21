<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import {
  DropdownMenuSubTrigger,

  useForwardProps,
} from 'reka-ui'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwarded"
    :class="cn(
      'flex cursor-default w-full gap-2 select-none items-center rounded-lg px-2 py-1.5 text-3 outline-none focus:bg-b2 data-[state=open]:bg-b2',
      props.class,
    )">
    <slot />

    <icon name="right-sm" class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>

<script setup lang="ts">
import type {
  DropdownMenuRadioItemEmits,
  DropdownMenuRadioItemProps,
} from 'reka-ui'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }
>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex gap-2 cursor-default select-none items-center relative  py-2  pl-2 pr-2 text-2 outline-none transition-colors focus:bg-b2 rounded-md focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-30 data-[state=checked]:border-b3/80 data-[state=checked]:opacity-100 opacity-50 hover:opacity-80  group/radio cursor-pointer',
        props.class,
      )
    ">
    <IconWrapper>
      <icon
        name="tick-sm"
        class="size-5.5 group-data-[state=checked]/radio:opacity-100 opacity-0 transition-opacity duration-200 dst absolute" />
    </IconWrapper>
    <slot />
  </DropdownMenuRadioItem>
</template>

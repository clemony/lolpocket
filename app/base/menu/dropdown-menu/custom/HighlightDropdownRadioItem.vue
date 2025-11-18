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
      cn('group/radio relative flex cursor-default cursor-pointer items-center gap-2 rounded-md py-2 pr-2 pl-2 text-2 opacity-50 transition-colors outline-none select-none hover:opacity-80 focus:bg-b2 focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-30 data-[state=checked]:border-b3/80 data-[state=checked]:opacity-100',
        props.class,
      )
    ">
    <IconWrapper>
      <icon
        name="tick-sm"
        class="
          absolute size-5.5 opacity-0 dst transition-opacity duration-200
          group-data-[state=checked]/radio:opacity-100
        " />
    </IconWrapper>
    <slot />
  </DropdownMenuRadioItem>
</template>

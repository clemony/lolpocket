<script setup lang="ts">
import type {
  DropdownMenuRadioItemEmits,
  DropdownMenuRadioItemProps,
} from 'reka-ui'
import { DropdownMenuRadioItem, useForwardPropsEmits } from 'reka-ui'

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
        'group/radio focus:bg-b2 focus:text-bc data-[state=checked]:border-b3/80 relative flex cursor-default cursor-pointer items-center gap-2 rounded-md p-2 text-sm opacity-50 transition-colors outline-none select-none hover:opacity-80 data-disabled:pointer-events-none data-disabled:opacity-30 data-[state=checked]:opacity-100',
        props.class,
      )
    "
  >
    <IconWrapper>
      <icon
        class="dst absolute size-5.5 opacity-0 transition-opacity duration-200 group-data-[state=checked]/radio:opacity-100"
        name="tick-sm"
      />
    </IconWrapper>
    <slot />
  </DropdownMenuRadioItem>
</template>

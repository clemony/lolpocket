<script setup lang="ts">
import type { DropdownMenuRadioItemEmits, DropdownMenuRadioItemProps } from 'reka-ui'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,

  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-2 outline-none transition-colors focus:bg-b2 focus:text-n1-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <icon
          name="radix-icons:radiobutton"
          class="size-4 fill-current" />
      </DropdownMenuItemIndicator>
    </span>

    <slot />
  </DropdownMenuRadioItem>
</template>

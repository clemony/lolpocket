<script setup lang="ts">
import type {
  MenubarCheckboxItemEmits,
  MenubarCheckboxItemProps,
} from 'reka-ui'
import {
  MenubarCheckboxItem,
  MenubarItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  MenubarCheckboxItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<MenubarCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarCheckboxItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-2 outline-none focus:bg-b2 focus:textneutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    ">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <CheckIcon class="w-4 h-4" />
      </MenubarItemIndicator>
    </span>

    <slot />
  </MenubarCheckboxItem>
</template>

<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from 'reka-ui'
import {
  MenubarItemIndicator,
  MenubarRadioItem,

  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<MenubarRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-10 pr-12 text-2 outline-none focus:bg-b2 focus:text-n1-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )">
    <span class="absolute left-3 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <DotFilledIcon class="h-4 w-4 fill-current" />
      </MenubarItemIndicator>
    </span>

    <slot />
  </MenubarRadioItem>
</template>

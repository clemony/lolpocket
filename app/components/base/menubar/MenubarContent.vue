<script setup lang="ts">
import type { MenubarContentProps } from 'reka-ui'
import {
  MenubarContent,

  MenubarPortal,
  useForwardProps,
} from 'reka-ui'

const props = withDefaults(
  defineProps<MenubarContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    align: 'start',
    alignOffset: -4,
    sideOffset: 8,
  },
)

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwarded"
      :class="
        cn(
          'z-50 min-w-48 overflow-hidden rounded-lg-2 border border-b2  bg-b1 p-1 text-popover-bc shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      ">
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>

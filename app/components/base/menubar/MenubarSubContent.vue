<script setup lang="ts">
import type { MenubarSubContentEmits, MenubarSubContentProps } from 'reka-ui'
import {
  MenubarPortal,
  MenubarSubContent,

  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<MenubarSubContentProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<MenubarSubContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarPortal>
    <MenubarSubContent
      v-bind="forwarded"
      :class="
        cn(
          'z-50 min-w-70 overflow-hidden rounded-md border backdrop-blur-md border-b2  bg-b1/90 p-1 text-popover-bc shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      ">
      <slot />
    </MenubarSubContent>
  </MenubarPortal>
</template>

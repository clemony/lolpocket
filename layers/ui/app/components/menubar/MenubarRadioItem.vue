<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from "reka-ui"
import {
  MenubarItemIndicator,
  MenubarRadioItem,
  useForwardPropsEmits,
} from "reka-ui"

const props = defineProps<
  MenubarRadioItemProps & { class?: HTMLAttributes["class"] }
>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default items-center gap-3 rounded-md px-4 py-1.5 text-sm font-medium outline-none select-none focus:bg-p2 focus:text-pc data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class
      )
    ">
    <span
      id="indicator"
      class="order-first flex size-4 items-center justify-center">
      <MenubarItemIndicator>
        <icon class="size-4 fill-current ds-xs" name="circle-big-dot" />
      </MenubarItemIndicator>
    </span>

    <slot />
  </MenubarRadioItem>
</template>

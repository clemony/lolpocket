<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from 'reka-ui'
import {
  MenubarItemIndicator,
  MenubarRadioItem,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  MenubarRadioItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-md py-1.5  px-4 gap-3 font-medium text-2 outline-none focus:bg-b2 focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    ">
    <span
      id="indicator"
      class="order-first flex size-4 items-center justify-center">
      <MenubarItemIndicator>
        <icon
          name="circle-big-dot"
          class="size-4 fill-current dst" />
      </MenubarItemIndicator>
    </span>

    <slot />
  </MenubarRadioItem>
</template>

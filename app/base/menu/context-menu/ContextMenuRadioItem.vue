<script setup lang="ts">
import type {
  ContextMenuRadioItemEmits,
  ContextMenuRadioItemProps,
} from 'reka-ui'
import {
  ContextMenuItemIndicator,
  ContextMenuRadioItem,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  ContextMenuRadioItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<ContextMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        `
          focus:textneutral-bc
          relative flex cursor-default items-center gap-3 rounded-sm py-1.5 pr-2
          pl-2 text-2 outline-none select-none
          focus:bg-b2
          data-[disabled]:pointer-events-none data-[disabled]:opacity-50
        `,
        props.class,
      )
    ">
    <span class="left-2 flex size-4.5 items-center justify-center">
      <ContextMenuItemIndicator>
        <icon name="dot" />
      </ContextMenuItemIndicator>
    </span>

    <slot />
  </ContextMenuRadioItem>
</template>

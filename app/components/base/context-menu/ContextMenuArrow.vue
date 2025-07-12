<script lang="ts" setup>
import type { ContextMenuArrowProps } from 'reka-ui'
import { ContextMenuArrow, useForwardProps } from 'reka-ui'

const props = defineProps<ContextMenuArrowProps & {
  class?: HTMLAttributes['class']
  sideOffset?: number
  alignOffset?: number
  iconClass?: HTMLAttributes['class']
  orientation?: 'vertical' | 'horizontal'
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuArrow
    v-bind="forwarded"
    :class="cn('absolute ContextMenuArrow will-change-[position,opacity]  pointer-events-none z-3 grid  place-items-center  ', props.class)">
    <div :class="cn('grid size-8 absolute mask-b-from-68% mask-b-to-69% -top-0.5  place-items-center  ', props.iconClass)">
      <icon name="ion:caret-up-sharp" :class="cn('!size-8 mask-b-from-70% mask-b-to-90% text-b1/91 stroke-6 text-shadow-sm *:stroke-b4 drop-shadow-xs drop-shadow-black/30 ')" />
    </div>
  </ContextMenuArrow>
</template>

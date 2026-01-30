<script lang="ts" setup>
import type { ContextMenuArrowProps } from 'reka-ui'
import { ContextMenuArrow, useForwardProps } from 'reka-ui'

const props = defineProps<
  ContextMenuArrowProps & {
    class?: HTMLAttributes['class']
    sideOffset?: number
    alignOffset?: number
    iconClass?: HTMLAttributes['class']
    orientation?: 'vertical' | 'horizontal'
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuArrow
    v-bind="forwarded"
    :class="
      cn(
        'ContextMenuArrow pointer-events-none absolute z-3 grid place-items-center will-change-[position,opacity]',
        props.class,
      )
    "
  >
    <div
      :class="
        cn(
          'absolute -top-0.5 grid size-8 place-items-center mask-b-from-68% mask-b-to-69%',
          props.iconClass,
        )
      "
    >
      <icon
        name="ion:caret-up-sharp"
        :class="
          cn(
            'text-b1/91 *:stroke-b4 size-8! mask-b-from-70% mask-b-to-90% stroke-6 drop-shadow-xs drop-shadow-black/30 text-shadow-sm',
          )
        "
      />
    </div>
  </ContextMenuArrow>
</template>

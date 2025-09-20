<script setup lang="ts">
import type { TabsTriggerPropsWithNullableValue } from '~~/shared/types/types.extend'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  TabsTriggerPropsWithNullableValue & {
    class?: HTMLAttributes['class']
    radius?: string
    color?: string
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwarded"
    :style="{
      '--tab-radius-min': props.radius,
      '--tab-bg': props.color,
    }"
    :class="
      cn(
        'tab data-[state=active]:tab-active text-xs font-medium  *:text-nowrap *:flex-nowrap gap-2 !border-b-transparent',
        props.class,
      )
    ">
    <slot />
  </TabsTrigger>
</template>
<!-- --tab-order Order of the tab
--tab-radius-min minimum border radius of the lift tab
--tab-paddings all padding values of the lift tab
--tab-border-colors all border color values of the lift tab
--tab-corner-width corner width of the lift tab
--tab-corner-height corner height of the lift tab
--tab-corner-width corner width of the lift tab
--tab-corner-position corner position of the lift tab
--tab-inset inset position of the lift tab
--radius-start border radius for the corner of the lift tab
--radius-end border radius for the corner of the lift tab -->

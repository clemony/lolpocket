<script setup lang="ts">
import { TabsTrigger, useForwardProps } from 'reka-ui'
import type { TabsTriggerPropsWithNullableValue } from '~~/shared/types/types-extend'

const props = defineProps<TabsTriggerPropsWithNullableValue & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwarded"
    :class="cn(
      'inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md px-3 py-1 text-2 font-medium ring-offset-b1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-b1 data-[state=active]:text-bc data-[state=active]:shadow',
      props.class,
    )">
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>

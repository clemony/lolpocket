<script lang="ts" setup>
import { TabsTrigger, useForwardProps } from 'reka-ui'
import type { TabsTriggerPropsWithNullableValue } from '~~/shared/types/types.extend'

const props = defineProps<TabsTriggerPropsWithNullableValue & {
  value?: string | number | null
  class?: HTMLAttributes['class']
  contrast?: boolean
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    :value="props.value"
    v-bind="forwarded"
    :class="cn('inline-flex gap-3 items-center justify-center whitespace-nowrap  px-3  py-1.25 text-3 z-2 cursor-pointer  hover:text-bc hover:**:text-bc **:text-bc text-bc ring-b3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ringneutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-bc/20 disabled:**:text-bc/20  data-[state=active]:bg-transparent font-medium  data-[state=active]:shadow-none', { ' data-[state=active]:text-bc data-[state=active]:**:text-bc': !props.contrast, ' !data-[state=active]:text-nc !data-[state=active]:**:text-nc ': props.contrast }, props.class)">
    <slot />
  </TabsTrigger>
</template>

<script lang="ts" setup>
import { TabsTrigger } from 'reka-ui'
import type { TabsTriggerProps } from 'reka-ui'

const props = defineProps<
  TabsTriggerProps & {
    class?: HTMLAttributes['class']
    contrast?: boolean
  }
>()
const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsTrigger v-bind="forwarded" :class="cn('inline-flex gap-3 items-center justify-center whitespace-nowrap  px-3  py-1.25 text-3 z-2 cursor-pointer  hover:text-bc hover:**:text-bc **:text-bc text-bc ring-b3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-bc/20 disabled:**:text-bc/20  data-[state=active]:bg-transparent font-medium  data-[state=active]:shadow-none', { ' data-[state=active]:text-bc data-[state=active]:**:text-bc': !props.contrast, ' data-[state=active]:text-nc data-[state=active]:**:text-nc': props.contrast }, props.class)">
    <slot />
  </TabsTrigger>
</template>

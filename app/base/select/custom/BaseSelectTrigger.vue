<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import type { SelectTriggerProps } from 'reka-ui'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<SelectTriggerProps & {
  class?: HTMLAttributes['class']
  noArrow?: boolean
  iconClass?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwarded"
    :class="cn(
      'flex h-11 group/select relative w-full items-center justify-between whitespace-nowrap rounded-lg  bg-transparent  pr-8  text-2  ring-offset-b1 data-[placeholder]:text-b2-bc focus:outline-none focus:ring-1 focus:ring-b2 disabled:cursor-not-allowed  cursor-pointer disabled:opacity-50 [&>span]:truncate text-start  transition-all duration-200 ',
      props.class,
    )">
    <slot />

    <SelectIcon
      v-if="!noArrow"
      :class="{ hidden: props.noArrow }"
      as-child
      class="absolute right-3 justify-self-end ">
      <icon
        name="select"
        :class="cn('size-4 opacity-50 shrink-0  absolute  right-0', iconClass)" />
    </SelectIcon>
  </SelectTrigger>
</template>

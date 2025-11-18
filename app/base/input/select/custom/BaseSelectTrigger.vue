<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes['class']
    noArrow?: boolean
    iconClass?: HTMLAttributes['class']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwarded"
    :class="
      cn('group/select relative flex h-11 w-full cursor-pointer items-center justify-between rounded-lg bg-transparent pr-8 text-start text-2 whitespace-nowrap ring-offset-b1 transition-all duration-200 data-[placeholder]:text-b2-bc focus:ring-1 focus:ring-b2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate',
        props.class,
      )
    ">
    <slot />

    <SelectIcon
      v-if="!noArrow"
      :class="{ hidden: props.noArrow }"
      as-child
      class="absolute right-3 justify-self-end">
      <icon
        name="select"
        :class="cn('absolute right-0 size-4 shrink-0 opacity-50', iconClass)" />
    </SelectIcon>
  </SelectTrigger>
</template>

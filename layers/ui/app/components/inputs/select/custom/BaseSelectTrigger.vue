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
      cn(
        'group/select data-[placeholder]:text-p2-bc relative flex h-11 w-full cursor-pointer items-center justify-between rounded-lg bg-transparent pr-8 text-start text-sm whitespace-nowrap ring-offset-p0 transition-all duration-200 focus:ring-1 focus:ring-p2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate',
        props.class,
      )
    ">
    <slot />

    <SelectIcon
      v-if="!noArrow"
      class="absolute right-3 justify-self-end"
      :class="{ hidden: props.noArrow }"
      as-child>
      <icon
        name="up-down"
        :class="cn('absolute right-0 size-4 shrink-0 opacity-50', iconClass)" />
    </SelectIcon>
  </SelectTrigger>
</template>

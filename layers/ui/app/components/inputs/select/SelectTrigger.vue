<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  SelectTriggerProps & { class?: HTMLAttributes['class'], noArrow?: boolean }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwarded"
    :class="
      cn(
        'data-[placeholder]:text-p2-bc flex h-11 w-full cursor-pointer items-center justify-between rounded-lg border border-p3 bg-transparent py-1 pr-3 pl-4 text-start text-sm whitespace-nowrap ring-offset-p0 transition-all duration-200 hover:inset-shadow-sm focus:ring-1 focus:ring-p2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate',
        props.class,
      )
    ">
    <slot />

    <SelectIcon
      v-if="!noArrow"
      class="relative"
      :class="{ hidden: props.noArrow }"
      as-child>
      <icon
        class="absolute right-0 size-4.5 shrink-0 text-pc/40"
        name="up-down" />
    </SelectIcon>
  </SelectTrigger>
</template>

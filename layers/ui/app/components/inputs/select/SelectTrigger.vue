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
        'data-[placeholder]:text-b2-bc border-b3 ring-offset-b1 focus:ring-b2 flex h-11 w-full cursor-pointer items-center justify-between rounded-lg border bg-transparent py-1 pr-3 pl-4 text-start text-sm whitespace-nowrap transition-all duration-200 hover:inset-shadow-sm focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate',
        props.class,
      )
    "
  >
    <slot />

    <SelectIcon
      v-if="!noArrow"
      class="relative"
      :class="{ hidden: props.noArrow }"
      as-child
    >
      <icon
        class="text-bc/40 absolute right-0 size-4.5 shrink-0"
        name="up-down"
      />
    </SelectIcon>
  </SelectTrigger>
</template>

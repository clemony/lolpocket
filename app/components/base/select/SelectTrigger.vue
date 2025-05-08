<script setup lang="ts">
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import type { SelectTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'], noArrow?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-11   w-full items-center justify-between whitespace-nowrap rounded-lg  border border-b4/80 bg-transparent pl-4 pr-3 py-1 text-2  ring-offset-b1 data-[placeholder]:text-b2-bc focus:outline-none focus:ring-1 focus:ring-b2 disabled:cursor-not-allowed  cursor-pointer disabled:opacity-50 [&>span]:truncate text-start  hover:inset-shadow-sm tldr-20 ',
      props.class,
    )">
    <slot />
    <SelectIcon :class="{ hidden: props.noArrow }" as-child class="relative">
      <icon name="select" class="size-5.25 opacity-50 shrink-0  absolute  right-0" />
    </SelectIcon>
  </SelectTrigger>
</template>

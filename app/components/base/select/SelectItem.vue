<script setup lang="ts">
import {
  SelectItem,
  SelectItemIndicator,

  SelectItemText,
  useForwardProps,
} from 'reka-ui'
import type { SelectItemProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'], noTick?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-2 outline-none focus:bg-b2 focus:text-neutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    ">
    <span class="absolute right-3 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator v-if="!props.noTick">
        <icon name="tick-sm" class="size-6 dst" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>

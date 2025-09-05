<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import type { SelectItemProps } from 'reka-ui'
import {
  SelectItem,
  SelectItemIndicator,

  SelectItemText,
  useForwardProps,
} from 'reka-ui'

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'], noTick?: boolean }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-2 pr-8 text-2 outline-none focus:bg-b2 focus:textneutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-b2/40',
        props.class,
      )
    ">
    <span class="absolute right-3 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator v-if="!props.noTick">
        <icon
          name="tick-sm"
          class="size-6 dst" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>

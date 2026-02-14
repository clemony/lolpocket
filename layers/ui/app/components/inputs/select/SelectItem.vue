<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
import type { SelectItemProps } from "reka-ui"
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  useForwardProps,
} from "reka-ui"

const props = defineProps<
  SelectItemProps & { class?: HTMLAttributes["class"]; noTick?: boolean }
>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex w-full cursor-default items-center justify-between rounded-md border border-transparent px-3 py-1.25 text-sm outline-none select-none focus:bg-p2 focus:text-pc data-disabled:pointer-events-none data-disabled:opacity-50 data-[state=checked]:justify-between data-[state=checked]:border-p2 data-[state=checked]:bg-p2/40 data-[state=checked]:px-3 data-[state=checked]:shadow-xs',
        props.class
      )
    ">
    <SelectItemText>
      <slot />
    </SelectItemText>
    <span
      class="flex size-3.5 items-center justify-center opacity-80 **:stroke-[0.9]">
      <SelectItemIndicator v-if="!props.noTick">
        <icon class="size-6 ds-xs" name="tick-sm" />
      </SelectItemIndicator>
    </span>
  </SelectItem>
</template>

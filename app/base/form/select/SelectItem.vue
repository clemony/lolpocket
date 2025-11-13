<script setup lang="ts">
import type { SelectItemProps } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  useForwardProps,
} from "reka-ui";

const props = defineProps<
  SelectItemProps & { class?: HTMLAttributes["class"]; noTick?: boolean }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <SelectItem
    v-bind="forwarded"
    :class="
      cn(
        `
          relative flex w-full cursor-default items-center justify-between
          rounded-md border border-transparent px-3 py-1.25 text-2 outline-none
          select-none
          focus:bg-b2 focus:text-bc
          data-[disabled]:pointer-events-none data-[disabled]:opacity-50
          data-[state=checked]:justify-between data-[state=checked]:border-b2
          data-[state=checked]:bg-b2/40 data-[state=checked]:px-3
          data-[state=checked]:shadow-xs
        `,
        props.class,
      )
    "
  >
    <SelectItemText>
      <slot />
    </SelectItemText>
    <span
      class="flex h-3.5 w-3.5 items-center justify-center opacity-80 **:stroke-[0.9]"
    >
      <SelectItemIndicator v-if="!props.noTick">
        <icon name="tick-sm" class="size-6 dst" />
      </SelectItemIndicator>
    </span>
  </SelectItem>
</template>

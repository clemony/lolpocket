<script lang="ts" setup>
import type { AcceptableValue } from "reka-ui";
import { SelectItemIndicator } from "reka-ui";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  value: AcceptableValue;
}>();
</script>

<template>
  <SelectItem
    :value="props.value"
    :class="
      cn(
        `
          btn-depth rounded-lg
          data-[state=highlighted]:bg-tint-b2/60
        `,
        props.class,
      )
    "
  >
    <slot />
  </SelectItem>
</template>

<script setup lang="ts">
import type { DropdownMenuTriggerProps } from "reka-ui";
import { DropdownMenuTrigger, useForwardProps } from "reka-ui";

interface Props extends DropdownMenuTriggerProps {
  base?: ButtonVariants["base"];
  class?: HTMLAttributes["class"];
  hover?: ButtonVariants["hover"];
  on?: ButtonVariants["on"];
  size?: ButtonVariants["size"];
  variant?: ButtonVariants["variant"];
}
const props = withDefaults(defineProps<Props>(), {
  base: "btn",
  size: "md",
  variant: "none",
});
const forwarded = useForwardProps(props);
</script>

<template>
  <DropdownMenuTrigger
    v-bind="forwarded"
    :class="
      cn(
        'group/drop',
        buttonVariants({ base, variant, size, hover, on }),
        '',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuTrigger>
</template>

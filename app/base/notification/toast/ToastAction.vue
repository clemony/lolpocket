<script setup lang="ts">
import type { ToastActionProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ToastAction } from "reka-ui";

const props = defineProps<
  ToastActionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <ToastAction
    v-bind="delegatedProps"
    :class="
      cn(
        `
      focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none
      group-[.destructive]:hover:border-destructive/30
      group-[.destructive]:hover:bg-destructive
      group-[.destructive]:hover:text-destructive-bc
      group-[.destructive]:focus:ring-destructive
      inline-flex h-8 shrink-0 items-center justify-center rounded-lg border
      bg-transparent px-3 text-3 font-medium ring-bc/50 transition-colors
      group-[.destructive]:border-b2/40
      hover:bg-tint-b2/40
      disabled:pointer-events-none disabled:opacity-50
    `,
        props.class,
      )
    "
  >
    <slot />
  </ToastAction>
</template>

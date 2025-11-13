<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from "reka-ui";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes["class"];
    noOverlay?: boolean;
    close?: boolean;
  }
>();

const emits = defineEmits<DialogContentEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 isolate z-50 bg-black/84"
      :class="{ 'invisible opacity-0': noOverlay }"
    />

    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          `
            data-[state=open]:animate-in
            data-[state=closed]:animate-out data-[state=closed]:fade-out-0
            data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-95
            data-[state=open]:zoom-in-95
            data-[state=closed]:slide-out-to-left-1/2
            data-[state=closed]:slide-out-to-top-[48%]
            data-[state=open]:slide-in-from-left-1/2
            data-[state=open]:slide-in-from-top-[48%]
            fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2
            -translate-y-1/2 gap-4 duration-200
            sm:rounded-lg
          `,
          props.class,
        )
      "
      @close-auto-focus.prevent
    >
      <slot />

      <DialogClose
        v-if="props.close"
        class="ring-offset-background absolute top-4 right-4 rounded-sm opacity-70 transition-opacity focus:ring-ring focus:ring-1 focus:ring-offset-1 focus:outline-none hover:opacity-100 disabled:pointer-events-none data-[state=open]:text-b1/50"
      >
        <icon name="x" class="size-4.5" />

        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>

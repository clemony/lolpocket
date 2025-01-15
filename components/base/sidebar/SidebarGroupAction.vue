<script setup lang="ts">
  import type { PrimitiveProps } from 'radix-vue';
  import type { HTMLAttributes } from 'vue';

  import { Primitive } from 'radix-vue';

  const props = defineProps<
    PrimitiveProps & {
      class?: HTMLAttributes['class'];
    }
  >();
</script>

<template>
  <Primitive
    data-sidebar="group-action"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'text-3text-bc ring-b3 hover:bg-b2 hover:text-bc absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-5 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        props.class
      )
    ">
    <slot />
  </Primitive>
</template>

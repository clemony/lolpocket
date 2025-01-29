<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  import { Primitive, type PrimitiveProps } from 'radix-vue';

  const props = withDefaults(
    defineProps<
      PrimitiveProps & {
        showOnHover?: boolean;
        class?: HTMLAttributes['class'];
      }
    >(),
    {
      as: 'button',
    }
  );
</script>

<template>
  <Primitive
    data-sidebar="menu-action"
    :class="
      cn(
        'text-bc ring-b3 hover:bg-b2 hover:text-bc peer-hover/menu-button:text-bc absolute top-1.5 right-1 flex aspect-square h-full items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-5 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover && 'peer-data-[active=true]/menu-button:text-bc group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
        props.class
      )
    "
    :as="as"
    :as-child="asChild" />
</template>

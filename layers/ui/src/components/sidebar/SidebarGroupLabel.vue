<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
  }
>()
</script>

<template>
  <Primitive
    data-slot="sidebar-group-label"
    data-sidebar="group-label"
    :as="as"
    :as-child="asChild"
    :class="
      cn('flex h-8 shrink-0 flex-nowrap items-center rounded-md px-2 text-sm font-medium text-nowrap text-bc/70 ring ring-bc/60 outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        `
          group-data-[collapsible=icon]:-mt-8
          group-data-[collapsible=icon]:opacity-0
        `,
        props.class,
      )
    ">
    <slot />
  </Primitive>
</template>

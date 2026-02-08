<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    trigger?: boolean
  }
>()
</script>

<template>
  <Primitive
    v-bind="props"
    :class="
      cn(
        'relative flex h-max w-full',
        {
          'after:bg-p3/60 px-6 py-px after:absolute after:top-2 after:left-3 after:z-0 after:h-[calc(100%-12px)] after:w-px':
            !trigger,
        },
        props.class,
      )
    ">
    <div class="grow">
      <slot />
    </div>
  </Primitive>
</template>

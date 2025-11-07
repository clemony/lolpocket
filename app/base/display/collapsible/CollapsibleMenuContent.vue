<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  trigger?: boolean
}>()
</script>

<template>
  <Primitive
    v-bind="props"
    :class="
      cn('w-full h-max flex relative ', { 'after:w-px after:z-0 after:h-[calc(100%-12px)]  after:absolute after:left-3  py-px after:top-[6px] after:bg-b3/60 px-6': !trigger }, props.class)
    ">
    <div class="grow">
      <slot />
    </div>
  </Primitive>
</template>

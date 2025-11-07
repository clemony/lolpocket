<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { FieldVariants } from './field-variants'
import { fieldVariants } from './field-variants'

const props = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: FieldVariants['orientation']
}>()
</script>

<template>
  <div
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    :class="cn(
      fieldVariants({ orientation }),
      props.class,
    )">
    <slot />
  </div>
</template>

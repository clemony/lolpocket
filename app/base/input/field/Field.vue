<!-- FieldWrapper.vue -->
<script setup lang="ts">
import { fieldVariants } from './field-variants'

const props = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: Orientation
}>()
</script>

<template>
  <div
    data-slot="field"
    :class="cn(fieldVariants({ orientation: props.orientation }), props.class)">
    <slot />
  </div>
</template>
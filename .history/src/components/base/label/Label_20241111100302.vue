<script setup lang="ts">
import { cn } from '@lib/utils'
import { Label, type LabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type LabelVariants, labelVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: LabelVariants['variant']
  size?: LabelVariants['size']
  class?: HTMLAttributes['class']
}


const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template><Label v-bind="delegatedProps" :class="cn(labelVariants({
  variant, size, button
}),
  props.class,
)
  ">
  <slot />
</Label></template>

<script setup lang="ts">
import type { VariantStyleProps } from 'assets/ts/variant-index'
import { labelVariants } from 'assets/ts/variant-index'
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

interface Props extends LabelProps {
  variant?: VariantStyleProps ['variant']
  size?: VariantStyleProps ['size']
  shape?: VariantStyleProps ['shape']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', labelVariants({ variant, size, shape }), props.class)">

    <slot />
  </Label>
</template>

<script setup lang="ts">
const { class: className, variant, variants, label } = defineProps<{
  class?: HTMLAttributes['class']
  variants?: any
  variant?: VariantStyleProps['variant']
  label?: boolean
}>()
</script>

<template>
  <Button
    as-child
    class="p-0"
    :variant="variant">
    <Motion
      :as="label ? 'label' : 'button'"
      :class="cn('', className)"
      :variants="variants">
      <slot />
    </Motion>
  </Button>
</template>
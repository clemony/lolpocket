<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from 'reka-ui'
import { toggleVariants } from '@variants'
import { Toggle, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: HTMLAttributes['class']
      variant?: any
      size?: any
      base?: any
      shape?: any
      hover?: any
    }
  >(),
  {
    disabled: false,
    size: '',
    variant: 'default',
  }
)

const emits = defineEmits<ToggleEmits>()

const delegatedProps = computed(() => {
  const { class: _, size, variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-slot="{ modelValue }"

    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size, base, hover, shape }), props.class)">
    <slot :model-value />
  </Toggle>
</template>

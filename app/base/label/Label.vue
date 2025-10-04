<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'
import { labelVariants } from '~/assets/variants/variant-index'

interface Props extends LabelProps {
  active?: any
  base?: any
  class?: HTMLAttributes['class']
  hover?: any
  shape?: any
  size?: any
  variant?: any
}

const props = defineProps<
  Props & {
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'text-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        labelVariants({ base, variant, shape, size, hover, active }),
        props.class,
      )
    ">
    <slot />
  </Label>
</template>

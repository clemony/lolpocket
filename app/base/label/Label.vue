<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'
import { labelVariants } from '~/assets/ts/variant-index'

interface Props extends LabelProps {
  active?: any
  class?: HTMLAttributes['class']
  hover?: any
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
        labelVariants({ variant, size, hover, active }),
        props.class,
      )
    ">
    <slot />
  </Label>
</template>

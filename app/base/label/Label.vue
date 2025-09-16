<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'
import { labelVariants } from '~/assets/ts/variant-index'

interface Props extends LabelProps {
  variant?: any
  size?: any
  hover?: any
  class?: HTMLAttributes['class']
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
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        labelVariants({ variant, size, hover }),
        props.class,
      )
    ">
    <slot />
  </Label>
</template>

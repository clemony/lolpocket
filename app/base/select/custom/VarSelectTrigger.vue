<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes['class']
    active?: ButtonVariants['active']
    base?: ButtonVariants['base']
    hover?: ButtonVariants['hover']
    shape?: ButtonVariants['shape']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwarded"
    :class="
      cn(
        buttonVariants({ variant, hover, active, size, shape, base }),
        props.class,
      )">
    <slot />
  </SelectTrigger>
</template>

<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes['class']

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
        'group/select',
        props.class,
      )
    "
  >
    <slot />
  </SelectTrigger>
</template>

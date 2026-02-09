<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import { reactiveOmit } from '@vueuse/core'
import type { SelectTriggerProps } from 'reka-ui'
import { SelectTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes['class']

    size?: ButtonProps['size']
    variant?: ButtonProps['variant']
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
    ">
    <slot />
  </SelectTrigger>
</template>

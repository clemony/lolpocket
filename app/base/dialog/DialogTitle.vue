<script setup lang="ts">
import type { DialogTitleProps } from 'reka-ui'
import { DialogTitle, useForwardProps, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes['class'] }
>()
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DialogTitle
    v-bind="forwarded"
    :class="
      cn('text-5 font-semibold leading-none tracking-tight', props.class)
    ">
    <slot />
  </DialogTitle>
</template>

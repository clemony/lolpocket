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
      cn('text-[1.3rem] leading-none font-bold dst', props.class)
    ">
    <slot />
  </DialogTitle>
</template>

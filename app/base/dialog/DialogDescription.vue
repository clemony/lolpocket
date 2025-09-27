<script setup lang="ts">
import type { DialogDescriptionProps } from 'reka-ui'
import {
  DialogDescription,
  useForwardProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  DialogDescriptionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwarded"
    :class="cn('text-2 text-bc/70', props.class)">
    <slot />
  </DialogDescription>
</template>

<script setup lang="ts">
import type { DialogDescriptionProps } from 'reka-ui'
import { DialogDescription, useForwardProps } from 'reka-ui'

const props = defineProps<
  DialogDescriptionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwarded"
    :class="cn('text-sm text-pc/40', props.class)">
    <slot />
  </DialogDescription>
</template>

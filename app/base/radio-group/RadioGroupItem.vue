<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui'
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="
      cn(
        'aspect-square size-5 rounded-full border outline outline-bc border-bc  text-bc shadow-sm   focus-visible:ring-1 focus-visible:ring-b2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    ">
    <RadioGroupIndicator class="flex items-center justify-center">
      <icon
        name="codicon:circle-filled"
        class="size-5.25 -mt-px textneutral" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

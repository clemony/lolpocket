<script setup lang="ts">
import type { AccordionItemProps } from 'reka-ui'
import { AccordionItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    v-bind="forwarded"
    data-slot="accordion-item"
    :class="cn('border-b border-b-p3 last:border-b-0', props.class)">
    <slot />
  </AccordionItem>
</template>

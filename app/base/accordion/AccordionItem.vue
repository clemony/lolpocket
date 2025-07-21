<script setup lang="ts">
import { AccordionItem, useForwardProps } from 'reka-ui'
import type { AccordionItemProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    v-bind="forwarded"
    :class="cn('border-b border-b-b3 last:border-b-0', props.class)">
    <slot />
  </AccordionItem>
</template>

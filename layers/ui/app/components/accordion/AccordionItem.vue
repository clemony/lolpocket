<script setup lang="ts">
import type { AccordionItemProps } from 'reka-ui'
import { AccordionItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    v-bind="forwarded"
    :class="
      cn('border-b-b3 border-b last:border-b-0',
         props.class,
      )
    ">
    <slot />
  </AccordionItem>
</template>

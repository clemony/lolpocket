<script setup lang="ts">
import type { AccordionTriggerProps } from 'reka-ui'
import {
  AccordionHeader,
  AccordionTrigger,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-start justify-between group/acc-trigger gap-4 text-left text-3 transition-all outline-none  disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:-rotate-90 [&_svg]:transition-rotate [&_svg]:duration-250',
          props.class,
        )
      ">
      <slot />

      <slot name="icon">
        <icon
          name="left"
          class="dst  size-5  mx-4" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

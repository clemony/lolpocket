<script setup lang="ts">
import {
  AccordionHeader,
  AccordionTrigger,

} from 'reka-ui'
import type { AccordionTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

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
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between font-medium gap-4 rounded-md py-4 text-left text-3 transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      ">
      <slot />

      <slot name="icon">
        <icon name="down-sm" class="text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

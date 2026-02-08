<script setup lang="ts">
import type { AccordionTriggerProps } from 'reka-ui'
import { AccordionHeader, AccordionTrigger } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      data-slot="accordion-trigger"
      :class="
        cn(
          'group/acc-trigger [&_svg]:transition-rotate flex flex-1 items-start justify-between gap-4 text-left text-md transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:duration-250 [&[data-state=open]>svg]:-rotate-90',
          props.class,
        )
      ">
      <slot />

      <slot name="icon">
        <icon
          class="mx-4 size-5 dst"
          name="left" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

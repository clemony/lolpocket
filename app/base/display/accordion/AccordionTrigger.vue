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
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="
        cn('group/acc-trigger flex flex-1 items-start justify-between gap-4 text-left text-3 transition-all outline-none [&_svg]:transition-rotate [&_svg]:duration-250 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:-rotate-90',
          props.class,
        )
      ">
      <slot />

      <slot name="icon">
        <icon
          name="left"
          class="mx-4 size-5 dst" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

<script setup lang="ts">
import type { AccordionContentProps } from 'reka-ui'
import { AccordionContent } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    class="AccordionContent data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm"
    v-bind="delegatedProps"
    data-slot="accordion-content"
  >
    <div :class="cn('pt-0 pb-4', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>

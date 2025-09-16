<script setup lang="ts">
import type { AccordionContentProps } from 'reka-ui'
import { AccordionContent } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
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
    data-slot="accordion-content"
    v-bind="delegatedProps"
    class="AccordionContent data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-xs">
    <div :class="cn('pt-0 pb-4', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>

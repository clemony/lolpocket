<script setup lang="ts">
import type { SeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Separator } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<SeparatorProps & { class?: HTMLAttributes['class'], label?: string }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="cn('bg-b3/60 relative shrink-0', props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full', props.class)"
  >
    <span
      v-if="props.label"
      :class="
        cn(
          'text-2 text-bc/60 bg-b1 absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center',
          props.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] px-2 py-1',
        )
      "
    >
      {{ props.label }}
    </span>
  </Separator>
</template>

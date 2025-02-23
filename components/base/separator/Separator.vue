<script setup lang="ts">
import { Separator } from 'reka-ui'
import type { SeparatorProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'], label?: string }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'shrink-0 bg-b2 border-b2  relative',
        props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
        props.class,
      )
    "
  >
    <span
      v-if="props.label"
      :class="
        cn(
          'text-2 text-bc/60 bg-b1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center',
          props.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] py-1 px-2',
        )
      "
    >{{ props.label }}</span>
  </Separator>
</template>

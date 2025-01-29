<script setup lang="ts">
import type { ContextMenuContentEmits, ContextMenuContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ContextMenuContent, ContextMenuPortal, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
  ContextMenuContentProps & {
    class?: HTMLAttributes['class']
    align?: string
    side?: string
  }
>()
const emits = defineEmits<ContextMenuContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuPortal>
    <ContextMenuContent
      as-child
      v-bind="forwarded"
      :class="
        cn(
          'context-menu border-b3 bg-b1/70! text-bc shadow-smooth animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-40 min-w-40 rounded-lg border p-1 backdrop-blur-md',
          props.class,
        )
      "
    >
      <slot />
    </ContextMenuContent>
  </ContextMenuPortal>
</template>

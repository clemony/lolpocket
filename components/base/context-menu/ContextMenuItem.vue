<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ContextMenuItem, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ContextMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    :class="
      cn(
        'focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center gap-3.5 rounded-sm px-2 py-1.5 font-medium outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </ContextMenuItem>
</template>

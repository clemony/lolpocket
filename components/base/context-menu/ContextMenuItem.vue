<script setup lang="ts">
import {
  ContextMenuItem,

  useForwardPropsEmits,
} from 'reka-ui'
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

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
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-2 outline-none focus:bg-b2 focus:text-neutral-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </ContextMenuItem>
</template>

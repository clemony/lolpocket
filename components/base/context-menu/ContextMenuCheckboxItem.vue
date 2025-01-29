<script setup lang="ts">
import type { ContextMenuCheckboxItemEmits, ContextMenuCheckboxItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ContextMenuCheckboxItem, ContextMenuItemIndicator, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ContextMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ContextMenuCheckboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuCheckboxItem
    v-bind="forwarded"
    :class="
      cn(
        'focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuItemIndicator>
        <icon
          name="lucide:check"
          class="h-4 w-4"
        />
      </ContextMenuItemIndicator>
    </span>
    <slot />
  </ContextMenuCheckboxItem>
</template>

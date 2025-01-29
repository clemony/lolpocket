<script setup lang="ts">
import type { ContextMenuRadioItemEmits, ContextMenuRadioItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ContextMenuItemIndicator, ContextMenuRadioItem, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ContextMenuRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ContextMenuRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuRadioItem
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
          name="lucide:circle"
          class="h-2 w-2 fill-current"
        />
      </ContextMenuItemIndicator>
    </span>
    <slot />
  </ContextMenuRadioItem>
</template>

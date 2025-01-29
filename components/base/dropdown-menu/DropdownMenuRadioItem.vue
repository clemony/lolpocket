<script setup lang="ts">
import type { DropdownMenuRadioItemEmits, DropdownMenuRadioItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { DropdownMenuItemIndicator, DropdownMenuRadioItem, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'text-2 focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-9 outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <icon
          name="tick-sm"
          class="size-5 fill-current"
        />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>

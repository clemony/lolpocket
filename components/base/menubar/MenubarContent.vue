<script setup lang="ts">
import type { MenubarContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { MenubarContent, MenubarPortal, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<MenubarContentProps & { class?: HTMLAttributes['class'] }>(), {
  align: 'start',
  alignOffset: 0,
  sideOffset: 0,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwardedProps"
      :class="
        cn(
          'menubar-content border-b2 bg-b1/92 data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top] text-bc :slide-in-from-bottom-2 z-70 min-w-52 overflow-hidden rounded-lg border p-1 shadow-md backdrop-blur-md',
          props.class,
        )
      "
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>

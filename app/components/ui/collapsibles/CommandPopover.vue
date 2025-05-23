<script lang="ts" setup>
import { PopoverAnchor } from 'reka-ui'

const { class: className, side = 'right', align = 'start' } = defineProps<{
  class?: HTMLAttributes['class']
  side?: Side
  align?: Align
}>()

const emit = defineEmits(['closePopover'])
</script>

<template>
  <Popover>
    <PopoverAnchor class=" absolute size-1 z-2" :class="cn(' -right-16', className)" />
    <LazyPopoverContent :side="side" :align="align" class="w-110  !rounded-box  bg-black-20/80 max-h-200   **:text-white/60 drop-shadow-lg inset-shadow-sm p-0  border-1 drop-shadow-black/30 shadow-black/20 shadow-md  border-accent" @focus-outside.prevent @close-auto-focus.prevent @pointer-down-outside.prevent @escape-key-down="emit('closePopover')">
      <article class="size-full rounded-box inset-shadow-sm backdrop-blur-md">
        <slot />
      </article>
    </LazyPopoverContent>
  </Popover>
</template>
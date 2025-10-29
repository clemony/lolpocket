<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PopoverContentProps & {
      class?: HTMLAttributes['class']
      id?: string
      to?: string
      variant?: PopoverContentVariants['variant']
      dataTheme?: string
    }
  >(),
  {
    sideOffset: 8,
    align: 'center',
  }
)

const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'dataTheme')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const { base } = popoverContentVariants({ variant: props.variant || 'base' })

provide('popoverVariant', props.variant)
</script>

<template>
  <PopoverPortal :to="props.to">
    <PopoverContent
      :id="props.id"
      ref="content"
      :align
      :side-offset
      v-bind="{ forwarded }"
      :class="cn(base(), props.class)"
      @close-auto-focus.prevent>
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>

<style>
@reference '@css/tailwind.css';

.popover-button-label {
  @apply !text-2 h-6 pr-4 items-center my-2 cursor-pointer items-center justify-between font-semibold text-bc/90 whitespace-nowrap w-full;
}
</style>
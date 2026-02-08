<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PopoverContentProps & {
      class?: HTMLAttributes['class']
      id?: string
      to?: string
      variant?: any
      dataTheme?: string
    }
  >(),
  {
    sideOffset: 8,
    align: 'center',
    dataTheme: 'base',
  }
)

const emits = defineEmits<PopoverContentEmits>()
const delegatedProps = reactiveOmit(props, 'class', 'dataTheme')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

provide('popoverVariant', props.variant)
</script>

<template>
  <PopoverPortal :to="props.to">
    <PopoverContent
      v-bind="{ forwarded }"
      :id="props.id"
      :align
      :data-theme="props.dataTheme"
      :side-offset
      :class="cn(props.class)"
      @close-auto-focus.prevent>
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>

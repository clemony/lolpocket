<script setup lang="ts">
import {
  ContextMenuRadioGroup,

  useForwardPropsEmits,
} from 'radix-vue'
import type { ContextMenuRadioGroupEmits, ContextMenuRadioGroupProps } from 'radix-vue'

const props = defineProps<ContextMenuRadioGroupProps>()
const emits = defineEmits<ContextMenuRadioGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ContextMenuRadioGroup v-bind="forwarded">
    <slot />
  </ContextMenuRadioGroup>
</template>

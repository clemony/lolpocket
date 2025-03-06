<script setup lang="ts">

import { SelectScrollUpButton, useForwardProps } from 'reka-ui'
import type { SelectScrollUpButtonProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <icon name="up-sm" class="size-6" />
    </slot>
  </SelectScrollUpButton>
</template>

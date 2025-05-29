<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton v-bind="forwarded" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <icon name="up-sm" class="size-6" />
    </slot>
  </SelectScrollUpButton>
</template>

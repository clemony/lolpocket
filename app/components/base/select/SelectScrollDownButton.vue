<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectScrollDownButton, type SelectScrollDownButtonProps, useForwardProps } from 'reka-ui'

const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollDownButton v-bind="forwarded" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <icon name="down-sm" class="size-6" />
    </slot>
  </SelectScrollDownButton>
</template>

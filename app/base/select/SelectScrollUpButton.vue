<script setup lang="ts">
import type { SelectScrollUpButtonProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { SelectScrollUpButton, useForwardProps } from 'reka-ui'

const props = defineProps<
  SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwarded"
    :class="
      cn('flex sticky top-0 cursor-default items-center justify-center py-1', props.class)
    ">
    <slot>
      <icon
        name="up"
        class="size-4" />
    </slot>
  </SelectScrollUpButton>
</template>

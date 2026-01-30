<script setup lang="ts">
import type { MenubarSeparatorProps } from 'reka-ui'
import { MenubarSeparator, useForwardProps } from 'reka-ui'

const props = defineProps<
  MenubarSeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSeparator
    v-bind="forwarded"
    :class="cn('bg-b2 -mx-1 my-1 h-px', props.class)"
  />
</template>

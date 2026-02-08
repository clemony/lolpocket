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
    :class="cn('-mx-1 my-1 h-px bg-p2', props.class)" />
</template>

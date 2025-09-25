<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'reka-ui'
import { ComboboxSeparator } from 'reka-ui'

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ComboboxSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 h-px bg-b3/80', props.class)">
    <slot />
  </ComboboxSeparator>
</template>

<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'reka-ui'
import { ComboboxSeparator } from 'reka-ui'

const props = defineProps<
  ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ComboboxSeparator
    v-bind="delegatedProps"
    :class="cn('bg-b3/80 -mx-1 h-px', props.class)"
  >
    <slot />
  </ComboboxSeparator>
</template>

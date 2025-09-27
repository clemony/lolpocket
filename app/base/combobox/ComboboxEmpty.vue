<script setup lang="ts">
import type { ComboboxEmptyProps } from 'reka-ui'
import { ComboboxEmpty } from 'reka-ui'

const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ComboboxEmpty
    v-bind="delegatedProps"
    :class="cn('py-6 text-center text-3', props.class)">
    <slot />
  </ComboboxEmpty>
</template>

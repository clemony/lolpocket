<script setup lang="ts">
import type { ComboboxEmptyProps } from 'reka-ui'
import { ComboboxEmpty } from 'reka-ui'

const props = defineProps<
  ComboboxEmptyProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ComboboxEmpty
    v-bind="delegatedProps"
    :class="cn('text-md py-6 text-center', props.class)"
  >
    <slot />
  </ComboboxEmpty>
</template>

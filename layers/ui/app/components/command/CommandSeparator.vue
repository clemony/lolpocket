<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import { Separator } from 'reka-ui'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="cn('bg-b3/60 -mx-1 h-px shrink-0', props.class)"
  >
    <slot />
  </Separator>
</template>

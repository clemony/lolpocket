<script setup lang="ts">
import type { DialogDescriptionProps } from 'reka-ui'
import { DialogDescription } from 'reka-ui'

const props = defineProps<
  DialogDescriptionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogDescription
    v-bind="delegatedProps"
    :class="cn('text-sm text-pc', props.class)">
    <slot />
  </DialogDescription>
</template>

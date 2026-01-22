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
    :class="cn('text-sm text-bc', props.class)"
    v-bind="delegatedProps">
    <slot />
  </DialogDescription>
</template>

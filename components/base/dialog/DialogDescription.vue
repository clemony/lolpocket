<script setup lang="ts">
import { DialogDescription, useForwardProps } from 'reka-ui'
import type { DialogDescriptionProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn('text-2 text-b2-bc', props.class)"
  >
    <slot />
  </DialogDescription>
</template>

<script setup lang="ts">
import type { DialogDescriptionProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { DialogDescription } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogDescription
    :class="cn('text-2 text-bc/60', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>

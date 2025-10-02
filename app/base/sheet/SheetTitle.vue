<script setup lang="ts">
import type { DialogTitleProps } from 'reka-ui'
import { DialogTitle } from 'reka-ui'

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogTitle
    :class="cn('text-5 font-semibold text-foreground', props.class)"
    v-bind="delegatedProps">
    <slot />
  </DialogTitle>
</template>

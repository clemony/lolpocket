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
    v-bind="delegatedProps"
    :class="cn('text-xl font-semibold text-pc', props.class)">
    <slot />
  </DialogTitle>
</template>

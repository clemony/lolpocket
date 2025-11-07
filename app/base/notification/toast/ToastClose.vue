<script setup lang="ts">
import type { ToastCloseProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { ToastClose } from 'reka-ui'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ToastClose
    v-bind="delegatedProps"
    as-child>
    <Button
      variant="ghost"
      v-bind="$attrs"
      :class="cn('absolute top-2.5 hover:*:opacity-100 *:opacity-50 -right-1 btn-square !size-8', props.class)">
      <icon
        name="x"
        class="h-4 w-4 **:stroke-[1.7]" />
    </Button>
  </ToastClose>
</template>

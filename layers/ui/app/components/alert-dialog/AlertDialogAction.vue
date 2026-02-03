<script setup lang="ts">
import type { AlertDialogActionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction } from 'reka-ui'

const props = defineProps<
  AlertDialogActionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
  >
    <slot />
  </AlertDialogAction>
</template>

<script setup lang="ts">
import type { ToastDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ToastDescription } from 'reka-ui'

const props = defineProps<
  ToastDescriptionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ToastDescription
    v-bind="delegatedProps"
    :class="cn('text-md font-medium', props.class)"
  >
    <slot />
  </ToastDescription>
</template>

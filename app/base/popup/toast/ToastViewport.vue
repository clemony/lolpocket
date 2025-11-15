<script setup lang="ts">
import type { ToastViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ToastViewport } from 'reka-ui'

const props = defineProps<
  ToastViewportProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <ToastViewport
    v-bind="delegatedProps"
    :class="
      cn(
        `
          fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-4
          p-4
          sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col
          md:max-w-[360px]
        `,
        props.class,
      )
    " />
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core';
import type { ToastRootEmits, ToastRootProps } from 'reka-ui';
import { ToastRoot, useForwardPropsEmits } from 'reka-ui';
import { toastVariants } from '~/ui/variants/toast-variants';

const props = defineProps<ToastRootProps & {

  class?: HTMLAttributes['class']
  onOpenChange?: ((value: boolean) => void) | undefined
  variant?: ToastVariants['variant']
}>()

const emits = defineEmits<ToastRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(toastVariants({ variant }), props.class)"
    @update:open="onOpenChange">
    <slot />
  </ToastRoot>
</template>

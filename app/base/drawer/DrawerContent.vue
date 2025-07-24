<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerContent, DrawerPortal } from './drawer-index'

import DrawerOverlay from './DrawerOverlay.vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'], side?: Side }>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />

    <DrawerContent
      v-bind="forwarded"
      :class="cn(
        'fixed z-50  border border-b3 bg-b1 overflow-hidden',

        {
          'mt-24 rounded-t-[10px] bottom-0': side == 'bottom',
          'h-auto  inset-x-0  flex flex-col': side == 'top' || side == 'bottom',

          'right-0  justify-self-end  rounded-l-[10px] ': side == 'right',
          'inset-y-0 h-full flex  flex-nowrap': side == 'right' || side == 'left',
        },
        props.class,
      )">
      <div
        v-if="side == 'top' || side == 'bottom'"
        class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-b2" />

      <div
        v-else
        class="h-full grid  items-center">
        <div
          class="my-auto   w-2 h-[100px]  rounded-full bg-b3/60"
          :class="{ 'ml-4': side == 'right' }" />
      </div>

      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>

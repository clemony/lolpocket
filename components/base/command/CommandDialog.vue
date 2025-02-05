<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'
import { Dialog, DialogContent } from '../dialog/dindex'
import Command from './CommandRoot.vue'

const props = defineProps<DialogRootProps & {
  overlayOpacity?: number
}>()

const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Dialog v-bind="forwarded">
    <DialogContent class="overflow-hidden p-0 shadow-pretty !rounded-[0.80rem] border border-b3 bg-b1/60 backdrop-blur-sm" :overlay-opacity="props.overlayOpacity">
      <CommandRoot
        class="[&_[cmdk-group-heading]]:text-bc/60 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 "
      >
        <slot />
      </CommandRoot>
    </DialogContent>
  </Dialog>
</template>

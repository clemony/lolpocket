<script lang="ts" setup>
import { PopoverArrow } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <PopoverArrow
    as-child
    class="icon"
    :height="8"
    :width="8">
    <div class="relative size-8 relative  scale-x-110 ">
      <icon
        name="formkit:caretdown"
        :class="cn('!size-full z-0 icon absolute bottom-[8px] text-neutral/77 invert opacity-20  stroke-[0.5]  drop-shadow-xs', props.class)" />

      <icon
        name="formkit:caretdown"
        :class="cn('!size-full z-1 icon absolute bottom-[9px] text-neutral/77  stroke-[0.5]  drop-shadow-xs mask-t-from-66% mask-t-to-70%', props.class)" />
    </div>
  </PopoverArrow>
</template>

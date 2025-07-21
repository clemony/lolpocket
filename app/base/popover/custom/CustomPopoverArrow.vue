<script lang="ts" setup>
import { PopoverArrow } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <PopoverArrow as-child :height="8" :width="8">
    <div class="relative size-7 relative -mb-6">
      <icon name="popover-caret" :class="cn('!size-6  absolute bottom-3 text-n1/77 stroke-[0.5] stroke-b4 drop-shadow-xs mask-clip-bottom', props.class)" />
    </div>
  </PopoverArrow>
</template>

<script lang="ts" setup>
import { PopoverArrow } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <PopoverArrow as-child :height="8" :width="8">
    <div class="relative  size-8">
      <icon name="fa:caret-down" :class="cn('!size-8  absolute -bottom-1.25 text-neutral/85 stroke-[0.5] stroke-b3 drop-shadow-xs mask-clip-bottom', props.class)" />
    </div>
  </PopoverArrow>
</template>

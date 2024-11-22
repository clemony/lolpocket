<script setup lang="ts">
import { cn } from '@lib/utils'

import { SplitterResizeHandle, type SplitterResizeHandleEmits, type SplitterResizeHandleProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SplitterResizeHandleProps & {
  class?: HTMLAttributes['class'],
  withHandle?: boolean
  label?: string
}>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
<SplitterResizeHandle v-bind="forwarded" :class="cn('relative bg-transparent! flex ', props.class)">

  <template v-if="props.label">
    <div role="tablist" class=" -rotate-0!  tabs tabs-lifted  bg-transparent!">
      <Label class='absolute pointer-events-none bg-transparent! tab tab-active flex-nowrap text-nowrap'>{{ props.label
        }}</Label>
      <Label role="tab" class='absolute left-4  tab hidden'>{{
        }}</Label>
    </div>
  </template>



</SplitterResizeHandle>
</template>

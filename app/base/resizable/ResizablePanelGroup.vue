<script setup lang="ts">
import type { SplitterGroupEmits, SplitterGroupProps } from 'reka-ui'
import { SplitterGroup, useForwardPropsEmits } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

const props = defineProps<SplitterGroupProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SplitterGroupEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterGroup
    v-bind="forwarded"
    :class="cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', props.class)">
    <slot />
  </SplitterGroup>
</template>

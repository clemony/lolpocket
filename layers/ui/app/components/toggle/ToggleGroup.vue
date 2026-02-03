<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from 'reka-ui'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, provide } from 'vue'

const props = defineProps<
  ToggleGroupRootProps & {
    class?: HTMLAttributes['class']
  }
>()
const emits = defineEmits<ToggleGroupRootEmits>()

provide('toggleGroup', {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="cn('flex items-center justify-center gap-1', props.class)"
  >
    <slot />
  </ToggleGroupRoot>
</template>

<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from 'reka-ui'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, provide } from 'vue'

const props = defineProps<
  ToggleGroupRootProps & {
    class?: HTMLAttributes['class']
    variant?: ToggleGroupVariants['variant']
    size?: ToggleGroupVariants['size']
    on?: ToggleGroupVariants['active']
  }
>()
const emits = defineEmits<ToggleGroupRootEmits>()

provide('toggleGroup', {
  active: props.on,
  size: props.size,
  variant: props.variant
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
    :class="cn('flex items-center justify-center gap-1', props.class)">
    <slot
      :variant
      :size
      :on />
  </ToggleGroupRoot>
</template>

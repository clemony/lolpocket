<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from 'reka-ui'
import { ToggleGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, provide } from 'vue'
import type { toggleVariants } from './toggleVariants'

type ToggleGroupVariants = VariantProps<typeof toggleVariants>

const props = defineProps<
  ToggleGroupRootProps & {
    class?: HTMLAttributes['class']
    variant?: ToggleGroupVariants['variant']
    size?: ToggleGroupVariants['size']
  }
>()
const emits = defineEmits<ToggleGroupRootEmits>()

provide('toggleGroup', {
  size: props.size,
  variant: props.variant,
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
    <slot />
  </ToggleGroupRoot>
</template>

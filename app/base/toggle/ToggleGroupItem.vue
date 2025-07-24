<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { ToggleGroupItemProps } from 'reka-ui'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed, inject } from 'vue'
import { toggleVariants } from './toggleVariants'

type ToggleGroupVariants = VariantProps<typeof toggleVariants>

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ToggleGroupVariants['variant']
  size?: ToggleGroupVariants['size']
}>()

const context = inject<ToggleGroupVariants>('toggleGroup')

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props
  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwarded"
    :class="cn(toggleVariants({
      variant: context?.variant || variant,
      size: context?.size || size,
    }), props.class)">
    <slot />
  </ToggleGroupItem>
</template>
<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import { toggleVariants } from '@variants'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes['class']
    variant?: ToggleGroupVariants['variant']
    size?: ToggleGroupVariants['size']
  }
>()

const context = inject<ToggleGroupVariants>('toggleGroup')

const delegatedProps = computed(() => {
  const { class: _, size, variant, ...delegated } = props
  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwarded"
    :class="
      cn(
        toggleVariants({
          variant: context?.variant || variant,
          size: context?.size || size,
        }),
        props.class,
      )
    ">
    <slot />
  </ToggleGroupItem>
</template>

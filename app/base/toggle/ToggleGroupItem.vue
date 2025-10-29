<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes['class']
    variant?: ToggleGroupVariants['variant']
    size?: ToggleGroupVariants['size']
    on?: ToggleGroupVariants['active']
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
        'group/toggle',
        toggleVariants({
          variant: context?.variant || variant,
          size: context?.size || size,
          active: context?.active || on,
        }),
        props.class,
      )
    ">
    <slot />
  </ToggleGroupItem>
</template>

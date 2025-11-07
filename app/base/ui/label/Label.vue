<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'

interface Props extends LabelProps {
  active?: LabelVariants['active']
  base?: LabelVariants['base']
  class?: HTMLAttributes['class']
  hover?: LabelVariants['hover']
  size?: LabelVariants['size']
  variant?: LabelVariants['variant']
}

const props = defineProps<
  Props & {
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'text-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        labelVariants({ base, variant, size, hover, active }),
        props.class,
      )
    ">
    <slot />
  </Label>
</template>

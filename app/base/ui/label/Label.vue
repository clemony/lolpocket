<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'

interface Props extends LabelProps {
  base?: LabelVariants['base']
  class?: HTMLAttributes['class']
  hover?: LabelVariants['hover']
  on?: ButtonVariants['on']
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
      cn('group/label text-3 leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        labelVariants({ base, variant, size, hover, on }),
        props.class,
      )
    ">
    <slot />
  </Label>
</template>

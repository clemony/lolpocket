<script lang="ts" setup>
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  name: string
  wrapperClass?: HTMLAttributes['class']
  size?: ElementVariants['size']
  variant?: ElementVariants['variant']
  base?: ElementVariants['base']
}>(), {
  base: 'btn',
  size: 'sq-4',
  variant: 'none',
})
</script>

<template>
  <Element

    :class="cn('p-0!', buttonVariants({ base: props.base, variant: props.variant, size: props.size }), props.wrapperClass)">
    <Icon
      :name="props.name"
      :class="cn('', props.class)" />
  </Element>
</template>

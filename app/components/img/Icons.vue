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
  size: 'sq-4',
  variant: 'none'
})
</script>

<template>
  <Element

    :class="cn('inline aspect-square', buttonVariants({ base, variant, size }), props.wrapperClass)">
    <icon
      :name
      :class="cn('', props.class)" />
  </Element>
</template>

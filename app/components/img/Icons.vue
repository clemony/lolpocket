<script lang="ts" setup>
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  name: string
  wrapperClass?: HTMLAttributes['class']
  size?: ElementVariants['size']
}>(), {
  size: 'sq-4',

})

const delegated = reactiveOmit(props, 'class', 'name')
const forwarded = useForwardProps(delegated)
</script>

<template>
  <Element
    v-bind="forwarded"
    :class="cn('', props.wrapperClass)">
    <icon
      :name
      :class="cn('', props.class)" />
  </Element>
</template>

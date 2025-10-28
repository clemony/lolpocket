<script lang="ts" setup>
import { Element, TransitionSlide } from '#components'

const {
  as = 'div',
  class: className,
  invert = false,
  mode = 'out-in',
} = defineProps<{
  class?: HTMLAttributes['class']
  as?: string
  mode?: 'out-in' | 'in-out'
  invert?: boolean
}>()

const is = shallowRef<Component>(Element)

onMounted (() => {
  setTimeout(() => {
    is.value = TransitionSlide
  }, 300)
})
</script>

<template>
  <component
    :is
    group
    :appear="false"
    :as="as"
    :class="cn(className)"
    :mode="mode"
    :offset="
      !invert
        ? {
          enter: ['100%', 0],
          leave: ['-100%', 0],
        }
        : {
          enter: ['-100%', 0],
          leave: ['100%', 0],
        }
    ">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'
import { SliderRoot, useForwardPropsEmits, } from 'reka-ui'

const props = defineProps<
  SliderRootProps & {
    class?: HTMLAttributes['class']
  }
>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

watch(() => forwarded.value.modelValue, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <SliderRoot
    as-child
    :class=" props.class "
    v-bind="forwarded">
    <slot />
  </SliderRoot>
</template>

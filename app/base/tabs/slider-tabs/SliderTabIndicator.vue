<script setup lang="ts">
import type { SliderThumbProps } from 'reka-ui'
import { TabIndicator } from '#components'
import {
  injectSliderRootContext,
  SliderThumb,
  useForwardProps
} from 'reka-ui'

const props = defineProps<
  SliderThumbProps & {
    class?: HTMLAttributes['class']
    active?: ButtonVariants['active']
    base?: ButtonVariants['base']
    hover?: ButtonVariants['hover']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
  }
>()
const context = injectSliderRootContext()
const el = context.thumbElements.value.push(h(TabIndicator).el as HTMLElement)
console.log('🌱 - context:', context)
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  ;<SliderThumb
    v-for="(_, key) in context.modelValue"
    :key="key"
    :variant
    :class="cn(buttonVariants({ base, variant, size, hover, active }), props.class)"
    v-bind="forwarded" />
</template>
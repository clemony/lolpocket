<script setup lang="ts">
import type { SliderThumbProps } from 'reka-ui'
import { injectSliderRootContext, SliderThumb, useForwardProps } from 'reka-ui'

const props = defineProps<
  SliderThumbProps & {
    class?: HTMLAttributes['class']
    on?: ButtonVariants['on']
    base?: ButtonVariants['base']
    hover?: ButtonVariants['hover']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
  }
>()

const TabIndicator = resolveComponent('TabIndicator')

const context = injectSliderRootContext()
const el = context.thumbElements.value.push(h(TabIndicator).el as HTMLElement)
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SliderThumb
    v-for="(_, key) in context.modelValue"
    :key="key"
    :variant
    :class="cn(buttonVariants({ base, variant, size, hover, on }), props.class)"
    v-bind="forwarded" />
</template>

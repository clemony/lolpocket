<script setup lang="ts">
import { TransitionPresets, useElementVisibility, useTransition } from '@vueuse/core'

type TransitionsPresetsKeys = keyof typeof TransitionPresets

interface NumberTickerProps {
  class?: string
  decimalPlaces?: number
  delay?: number
  direction?: 'up' | 'down'
  duration?: number
  transition?: TransitionsPresetsKeys
  value?: number
}

const props = withDefaults(defineProps<NumberTickerProps>(), {
  decimalPlaces: 2,
  delay: 0,
  direction: 'up',
  duration: 1000,
  transition: 'easeOutCubic',
  value: 0,
})

const spanRef = ref<HTMLSpanElement>()

const transitionValue = ref(props.direction === 'down' ? props.value : 0)

const transitionOutput = useTransition(transitionValue, {
  delay: props.delay,
  duration: props.duration,
  transition: TransitionPresets[props.transition],
})

const output = computed(() => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: props.decimalPlaces,
    minimumFractionDigits: props.decimalPlaces,
  }).format(Number(transitionOutput.value.toFixed(props.decimalPlaces)))
})

const isInView = useElementVisibility(spanRef, {
  threshold: 0,
})

const hasBeenInView = ref(false)

const stopIsInViewWatcher = watch(
  isInView,
  (isVisible) => {
    if (isVisible && !hasBeenInView.value) {
      hasBeenInView.value = true
      transitionValue.value = props.direction === 'down' ? 0 : props.value
      stopIsInViewWatcher()
    }
  },
  { immediate: true },
)

watch(
  () => props.value,
  (newVal) => {
    if (hasBeenInView.value) {
      transitionValue.value = props.direction === 'down' ? 0 : newVal
    }
  },
)
</script>

<template>
  <span
    ref="spanRef"
    :class="cn('inline-block tabular-nums text-bc ', props.class)">
    {{ output }}
  </span>
</template>
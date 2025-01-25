<script setup lang="ts">
import { ProgressIndicator, ProgressRoot, type ProgressRootProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(), {
  modelValue: 0,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const isPageLoading = useLoadingIndicator().isLoading
watch(
  () => isPageLoading,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="cn('relative h-4 w-full overflow-hidden rounded-full bg-b1', props.class)"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-neutral transition-all"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

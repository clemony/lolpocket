<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultTab?: number
}>()

const tab = ref(props.defaultTab)
const previous = usePrevious(tab)
const offset = computed((): {
  enter: [number, number]
  leave: [number, number]
} => {
  if (previous.value == null) {
    // first load or undefined previous: enter from right, no leave
    return {
      enter: [100, 0],
      leave: [0, 0],
    }
  }

  if (tab.value > previous.value) {
    // moving forward: enter from right, leave to left
    return {
      enter: [100, 0],
      leave: [-100, 0],
    }
  }
  else {
    // moving backward: enter from left, leave to right
    return {
      enter: [-100, 0],
      leave: [100, 0],
    }
  }
})
</script>

<template>
  <div :class="cn('', props.class)">
    <transition-slide
      v-bind="$attrs"
      :offset="offset"
      mode="out-in"
      as="div">
      <slot />
    </transition-slide>
  </div>
</template>
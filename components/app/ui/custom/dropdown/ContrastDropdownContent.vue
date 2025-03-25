<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  alignOffset?: number
}>()


const dialogOpenState = {
  opacity: 1,
  filter: 'blur(0px)',
  rotateX: 0,
  rotateY: 0,
  z: 0,
  transition: {
    delay: 0.2,
    duration: 0.3,
    ease: [0.17, 0.67, 0.51, 1],
    opacity: {
      delay: 0.2,
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

const dialogInitialState = {
  opacity: 0,
  filter: 'blur(10px)',
  z: -100,
  rotateY: 25,
  rotateX: 5,
  transformPerspective: 500,
  transition: {
    duration: 0.2,
    ease: [0.67, 0.17, 0.62, 0.64],
  },
}

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <DropdownMenuContent
    class=""
    
      v-bind="$attrs"
    :align-offset="props.alignOffset"
    :class="cn('bg-neutral/83 **:text-nc/94 rounded-lg-1 px-1.5 py-1.5', props.class)">
        <div>
    <slot />
    </div>
  </DropdownMenuContent>
     
</template>
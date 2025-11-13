<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const variants = {
  hidden: {
    opacity: 0,
    transform: "translate(-10px, 0)",
  },
  visible: {
    opacity: 1,
    transform: "translate(0px, 0)",
  },
};
</script>

<template>
  <Motion as-child :variants="variants">
    <icon name="right" :class="cn('shrink-0 stroke-[1.2]', className)" />
  </Motion>
</template>

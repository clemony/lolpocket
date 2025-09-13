<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}
</script>

<template>
  <li

    :variants="variants"
    initial="hidden"
    animate="visible"
    exit="hidden">
    <label
      class=" btn-ghost-dark group "
      :class="cn('', className)"
      @click="console.log('click')">
      <slot />
    </label>
  </li>
</template>
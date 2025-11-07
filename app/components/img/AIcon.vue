<script lang="ts" setup>
const { name, class: className, size = 'sq-4' } = defineProps<{
  class?: HTMLAttributes['class']
  name: string
  size?: ElementVariants['size']
}>()
</script>

<template>
  <Element :size>
    <icon
      :name
      :class="cn('', className)" />
  </Element>
</template>
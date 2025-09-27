<script setup lang="ts">
const { name, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  name: string
}>()
const teenyicons = /teenyicons:/
const teeny = computed (() => name.match(teenyicons) ? 'scale-90' : '')
</script>

<template>
  <Icon
    :name="name"
    :class="cn('', className, teeny)" />
</template>

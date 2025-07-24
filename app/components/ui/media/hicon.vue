<script setup lang="ts">
const { class: className, name } = defineProps<{
  class?: HTMLAttributes['class']
  name?: string
}>()

const match = /i-/
</script>

<template>
  <component
    :is="name"
    v-if="name.match(match)"
    :class="cn('', className)" />
  <icon
    v-else
    :name="name"
    :class="cn('', className)" />
</template>
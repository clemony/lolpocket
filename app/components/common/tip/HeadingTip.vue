<script setup lang="ts">
const { class: className, heading, subheading, text } = defineProps<{
  class?: HTMLAttributes['class']
  heading: string
  subheading?: string
  text?: string
}>()
</script>

<template>
  <div :class="cn('', className)">
    <p
      v-if="subheading"
      class="pb-0.5 text-2 leading-none italic opacity-50">
      {{ subheading }}
    </p>
    <h3 class="leading-none">
      {{ heading }}
    </h3>
    <p>
      {{ text }}
    </p>
  </div>
</template>
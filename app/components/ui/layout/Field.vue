<script lang="ts" setup>
const props = defineProps<{
  title?: string
    class?: HTMLAttributes['class']
}>()

</script>

<template>


  <div :class="cn('field-box', {'!mt-0': !props.title}, props.class)">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
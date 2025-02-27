<script lang="ts" setup>
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="field grid justify-center **:select-none ">
    <div class="field-legend !overflow-visible">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
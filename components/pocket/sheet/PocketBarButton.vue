<script lang="ts" setup>
const props = defineProps<{
  component?: any
}>()
</script>

<template>
  <label class="btn btn-ghost  size-10 [&_svg]:opacity-80">
    <slot />
  </label>
</template>

<style scoped>

</style>

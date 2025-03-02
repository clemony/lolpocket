<script lang="ts" setup>
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="field grid justify-center **:select-none text-2">
    <div class="field-legend capitalize !overflow-visible">
      {{ props.title }}
      <slot  name="title"/>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
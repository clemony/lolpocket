<script lang="ts" setup>
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="field grid justify-center **:select-none text-2 shadow-warm-soft">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot  name="title"/>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
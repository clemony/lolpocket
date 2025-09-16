<script setup lang="ts">
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div class="customInnerHeader">
    <span>{{ props.params.name }}</span>
  </div>
</template>

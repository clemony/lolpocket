<script setup lang="ts">
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div class="flex gap-2 flex-wrap px-2">
    <div
      v-for="tag in props.params.data.tags"
      :key="tag"
      class="h-7 badge">
      # {{ tag
      }}
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const props = defineProps<{
  params: any
}>()
console.log('💠 - params:', props.params)
</script>

<template>
  <div class="flex gap-2 flex-wrap px-2">
    <Badge v-for="tag in props.params.data.tags" :key="tag" class="h-7">
      # {{ tag
      }}
    </Badge>
  </div>
</template>

<style scoped></style>

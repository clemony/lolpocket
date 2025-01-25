<script setup lang="ts">
const props = defineProps<{
  params: {
    data: {
      name: string
      key: string
      icon: string
      pinned: any
      tags: Array<string>
    }
    api: any
    node: any
  }
}>()
</script>

<template>
  <div class="flex gap-2 flex-wrap px-2">
    <Badge v-for="tag in props.params.data.tags" class="h-7">
      # {{ tag
      }}
    </Badge>
  </div>
</template>

<style scoped></style>

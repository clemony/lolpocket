<script setup lang="ts">
const { items } = defineProps<{
  items: any
}>()
</script>

<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2 w-full overflow-hidden">
    <Button
      v-for="item in items"
      :key="item.name"
      as="a"
      size="lg"
      :href="item.hash"
      variant="ghost"
      :class="cn(
        'w-full font-medium text-left justify-start',
        $route.path === item.hash && 'bg-muted hover:bg-muted',
      )">
      {{ item.name }}
    </Button>
  </nav>
</template>
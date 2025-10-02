<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav
    class="flex gap-y-1 space-x-2 lg:flex-col lg:space-x-0 w-full pl-0.5 pr-4 overflow-hidden">
    <Button
      v-for="item in route.matched[0].children"
      :key="item.name"
      as="a"
      size="xl"
      variant="link"
      :class="
        cn(
          'w-full font-semibold text-bc/80 text-6  text-left capitalize justify-start underline-offset-4',
          {
            'btn-active pointer-events-none': route.path === item.path,
            'text-bc/40 hover:text-bc': route.fullPath !== item.path,
          },
        )
      "
      @click="navigateTo(item.path)">
      {{ item.meta?.title || item.name }}
    </Button>
  </nav>
</template>

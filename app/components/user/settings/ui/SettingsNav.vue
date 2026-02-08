<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav
    class="flex size-full space-x-2 gap-y-1 overflow-hidden pr-4 pl-0.5 lg:flex-col lg:space-x-0">
    <Button
      v-for="item in route.matched[0].children"
      :key="item.name"
      as="a"
      size="xl"
      :class="
        cn(
          'h-12 w-full justify-start text-left text-lg! font-medium text-pc/80 capitalize underline-offset-4 hover:underline',
          {
            'btn-active pointer-events-none font-semibold':
              route.path === item.path,
            'text-pc/40 hover:text-pc': route.fullPath !== item.path,
          },
        )
      "
      @click="navigateTo(item.path)">
      {{ item.meta?.title || item.name }}
    </Button>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav
    class="
      flex size-full space-x-2 gap-y-1 overflow-hidden pr-4 pl-0.5 lg:flex-col
      lg:space-x-0
    ">
    <Button
      v-for="item in route.matched[0].children"
      :key="item.name"
      as="a"
      size="xl"
      variant="link"
      :class="
        cn('text-bc/80 h-12 w-full justify-start text-left text-lg! font-medium capitalize underline-offset-4',
           {
             'btn-active pointer-events-none font-semibold':
               route.path === item.path,
             'text-bc/40 hover:text-bc': route.fullPath !== item.path,
           },
        )
      "
      @click="navigateTo(item.path)">
      {{ item.meta?.title || item.name }}
    </Button>
  </nav>
</template>

<script lang="ts" setup>
const ps = usePocketStore()

definePageMeta({
  section: 'backpack',
})
</script>

<template>
  <div class="size-full flex">
    <BackpackSidebar />
    <div class="w-full pt-19 pr-18 flex flex-wrap pl-10 gap-8  items-center">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" :pocket="pocket" />
    </div>
  </div>
</template>

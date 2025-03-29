<script lang="ts" setup>
const ps = usePocketStore()
console.log('💠 - ps.pockets:', ps.pockets)
</script>

<template>
  <NuxtLayout name="header-layout">
       <div class="w-full pt-28 px-18">
      <h1>Backpack</h1>
    </div>
    <div class="flex flex-wrap px-18 gap-8 pt-8 items-center">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" class="size-110" :pocket="pocket" />
    </div>
  </NuxtLayout>
</template>
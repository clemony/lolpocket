<script lang="ts" setup>
const ps = usePocketStore()
</script>

<template>
  <NuxtLayout name="header-layout">
    <div class="flex flex-wrap px-18 gap-8">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" class="size-110" :pocket="pocket" />
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const ps = usePocketStore()
</script>

<template>
  <NuxtLayout name="header-layout">

    <div class="w-full pt-28 px-18 flex flex-wrap px-18 gap-8  items-center">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" :pocket="pocket" />
    </div>
  </NuxtLayout>
</template>

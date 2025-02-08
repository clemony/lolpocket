<script lang="ts" setup>
const ps = usePocketStore()
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md min-w-150">
    <li class="p-4 pb-2  opacity-60 tracking-wide font-medium text-3">
      Best Recent Builds
    </li>

    <TopBuild v-for="(pocket, index) in ps.pockets" :key="pocket.key" :index="index" :pocket="pocket" />
  </ul>
</template>

<style scoped>

</style>
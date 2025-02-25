<script lang="ts" setup>
const as = useAccountStore()
</script>

<template>
  <div class="size-full relative">
    <div class="absolute inset top-0 left-0 overflow-y-auto flex flex-col">
      <h2>Browse Pockets</h2>

      <PocketsCollapse v-for="folder in defaultFolders.concat(as.userFolders)" :key="folder.key" :folder="folder" />
    </div>
  </div>
</template>

<style scoped>

</style>
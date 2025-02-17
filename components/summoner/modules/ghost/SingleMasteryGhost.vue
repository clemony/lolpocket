<script lang="ts" setup>
</script>

<template>
  <ModuleGhostTemplate title="Champion Mastery">
    <div class="grid grid-cols-3 p-i-c">
      <div v-for="index in 3" :key="index" class="flex flex-col gap-6 items-center">
single champ
        <Empty class="h-3 w-16" />
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>
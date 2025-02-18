<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

</script>

<template>
  <div>
     <PocketHeader title="Champions" :pocket="pocket" class=""/>
  </div>
</template>

<style scoped>
</style>
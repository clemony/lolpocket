<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()
</script>

<template>
  <ShineButton class=" hover:border-neutral/40 border-neutral/15 inset-shadow-sm inset-shadow-black">
    <PocketIcon v-tippy="'Edit Pocket'"  :url="pocket.icon" class=" size-16 rounded-full" @click="editPocket(pocket)" />
  </ShineButton>
</template>

<style scoped>

</style>
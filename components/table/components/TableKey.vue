<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div class="flex justify-center size-full items-center">
    <kbd class="kbd !rounded-[4px] !text-3 ">
      {{ params.kbdKey }}
    </kbd>
  </div>
</template>

<style scoped>

</style>
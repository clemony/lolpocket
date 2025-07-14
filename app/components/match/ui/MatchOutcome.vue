<script lang="ts" setup>
const { win } = defineProps<{
  win: boolean
}>()
</script>

<template>
  <h3
    class="text-5  dst w-full text-start text-nowrap text-white/86  font-bold uppercase  ">
    {{ win ? 'Win' : 'Loss' }}
  </h3>
</template>
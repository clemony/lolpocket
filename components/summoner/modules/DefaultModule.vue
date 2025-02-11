<script lang="ts" setup>
const props = defineProps<{
index: number
}>()
</script>

<template>
  <button
    class="cursor-pointer bg-b2/40 border-b2 inset-shadow-sm  hover:opacity-60 transition-all duration-200  size-full  rounded-xl select-none  grid place-items-center relative "
  >
      <icon name="add" class="size-5.5 dst stroke-[1.1]" />
      {{props.index}}

  </button>
</template>

<style scoped>

</style>
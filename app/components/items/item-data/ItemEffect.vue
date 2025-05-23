<script setup lang="ts">
const { data, type } = defineProps<{
  data: Effect
  type: string
}>()
</script>

<template>
  <div
    class="w-full  flex flex-wrap text-wrap leading-normal items-center [&_img]:size-4 gap-x-1 [&_img]:align-bottom [&_img]:self-end">
    <div class="py-1  *:!text-precision/90">
      <span v-if="data.unique" class=" italic   tracking-tight">Unique {{ type }} -&nbsp;</span>
      <span v-if="data.name" class="italic tracking-tight">{{ data.name }}: &nbsp;</span>
    </div>

    <span
      v-if="data.effects"
      class=""
      v-html="data.effects" />
  </div>
</template>

<style scoped></style>

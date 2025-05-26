<script setup lang="ts">
const { data, type } = defineProps<{
  data: Effect
  type: string
}>()
</script>

<template>
  <div
    class="w-full    text-wrap leading-normal  gap-x-1 align-middle mt-2">
    <span v-if="data.unique" class=" italic  !text-precision/90 tracking-tight">Unique {{ type }}</span>
    <span v-if="data.name" class="italic !text-precision/90 tracking-tight"> -&nbsp;{{ data.name }}</span>
    <span v-if="data.unique || data.name" class=" !text-precision/90">
      :&nbsp;
    </span>

    <span
      v-if="data.effects"
      class=""
      v-html="data.effects" />
  </div>
</template>

<style scoped></style>

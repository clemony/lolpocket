<script setup lang="ts">
definePageMeta({
  title: "analysis",
  icon: "chart",
  order: 5,
  path: "/tools/analysis",
  search: "hidden",
})

const q = computed(() => ms().analysisQueueSelect)
const p = computed(() => ms().analysisPatchSelect)
</script>

<template>
  <div class="oveflow-hidden size-full">
    <menu
      class="overflow-hidden border-r border-r-p3/40 shadow-warm-2 shadow-black/7">
      <DataFilterPanel />
    </menu>

    <main
      class="relative w-full grow overflow-x-hidden overflow-y-auto px-10" />
  </div>
</template>

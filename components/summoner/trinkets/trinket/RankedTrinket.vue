<script lang="ts" setup>
const props = defineProps<{
  queue?: string
  title?: string
}>()
const as = useAccountStore()
</script>

<template>
  <ModuleTemplate class="module-bg !shadow-none">
    <div class="pl-2.5 pr-4.5 grid p-i-c gap-5 pt-6 self-center">
<!--       <RankCard :queue="props.queue" :title="props.title" class="[&_.ranked-title]:absolute [&_.ranked-title]:-top-5 [&_.ranked-title]:-left-3 relative [&_.ranked-grid]:gap-8" /> -->
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>
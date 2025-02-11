<script lang="ts" setup>
const props = defineProps<{
  dragging?: boolean
}>()
const ps = usePocketStore()
</script>

<template>
  <ModuleTemplate title="Best Recent Builds">
    <ul v class="list bg-base-100 rounded-lg shadow-sm gap-3 pt-3.5 pb-1">
      <TopBuild v-for="(pocket, index) in ps.pockets" :key="pocket.key" :index="index" :pocket="pocket" />
    </ul>
  </ModuleTemplate>
</template>

<style scoped>

</style>
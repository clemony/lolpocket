<script lang="ts" setup>
const props = defineProps<{
  dragging?: boolean
}>()
const ps = usePocketStore()
</script>

<template>
  <ModuleTemplate title="Best Recent Builds">
    <ul  class="px-2.5 pt-3.5">
      <TopBuild v-for="(pocket, index) in ps.pockets" :key="pocket.key" :index="index" :pocket="pocket" />
    </ul>
  </ModuleTemplate>
</template>

<style scoped>

</style>
<script lang="ts" setup>
const props = defineProps<{
  dragging?: boolean
}>()
const ps = usePocketStore()

const pockets = ref(ps.pockets)
</script>

<template>
  <ModuleTemplate title="Best Recent Builds" class="module-bg">
    <ul class=" size-[96%] px-2.5 pt-3.5 self-center items-center">
      <!--       <template v-for="(pocket, index) in ps.pockets" :key="pocket.key">
        <TopBuild :index="index" :pocket="pocket" />
      </template> -->
    </ul>
  </ModuleTemplate>
</template>

<style scoped>

</style>
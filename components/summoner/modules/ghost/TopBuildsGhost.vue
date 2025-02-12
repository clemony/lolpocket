<script lang="ts" setup>
const props = defineProps<{
  dragging?: boolean
}>()

const values = [82, 67, 55, 52]
</script>

<template>
  <ModuleGhostTemplate :dragging="props.dragging" title="Best Recent Builds">
    <div v-for="value in values" :key="value" class="grid grid-cols-[1fr_2fr_1fr] place-items-center h-14 gap-3 pl-0 -ml-2 first-of-type:mb-4 first-of-type:-mt-3 nth-of-type-[2]:mb-6 group">
      <Empty class="size-15"></Empty>
      <div class="h-full flex flex-col gap-4 mt-2">
        <Empty class="w-44 h-4" />
        <Empty class="w-32 h-4" />
      </div>

      <div
        class="self-center radial-progress ml-6 dst text-b2 size-14 after:hidden group-first-of-type:-mt-3"
        :style="`--value:${value}`" :aria-valuenow="value" role="progressbar"
      >
        <span class="text-bc/50">
          {{ value }}%
        </span>
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>
<script lang="ts" setup>
const props = defineProps<{
  expanded: boolean
}>()
</script>

<template>
  <button v-tippy="props.expanded ? 'Collapse Sidebar' : 'Expand Sidebar'" class="btn btn-ghost btn-square flex items-center   relative ">
    <AnimatePresence>
      <Motion v-if="props.expanded" :animate="{ opacity: 0, width: 0 }" as-child>
        <icon name="system-uicons:push-right" class="rotate-180 shrink-0 size-5.5 dst absolute" />
      </Motion>

      <Motion v-else as-child :animate="{ opacity: 100, width: 100 }">
        <icon name="system-uicons:pull-right" class="shrink-0 size-5.5 dst absolute" />
      </Motion>
    </AnimatePresence>
  </button>
</template>